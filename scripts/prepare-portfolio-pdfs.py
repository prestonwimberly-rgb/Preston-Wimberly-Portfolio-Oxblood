"""Prepare source artifacts; not part of the Node/Netlify build.

pages requires PyMuPDF and the original manuscript path.
resume requires ReportLab. See docs/portfolio-agency-review.md.
"""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def pages(source):
    import pymupdf

    manuscript = pymupdf.open(source)
    if len(manuscript) != 141 or manuscript[0].rect != pymupdf.Rect(0, 0, 432, 648):
        raise ValueError("Expected the 141-page, 6-by-9-inch manuscript")
    manifest_path = ROOT / "config/images.json"
    manifest = json.loads(manifest_path.read_text())
    for index in range(118, 122):
        name = f"sandpaper-page-{index - 4}.jpg"
        image = manuscript[index].get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
        image.save(ROOT / "public/images" / name, jpg_quality=92)
        manifest[f"/images/{name}"] = {"width": image.width, "height": image.height}
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
    excerpt = pymupdf.open()
    excerpt.insert_pdf(manuscript, from_page=119, to_page=120)
    excerpt.set_metadata({"title": "Four Hundred — an excerpt from SANDPAPER", "author": "Preston Wimberly"})
    (ROOT / "public/downloads").mkdir(exist_ok=True)
    excerpt.save(ROOT / "public/downloads/sandpaper-four-hundred.pdf", garbage=4, deflate=True)
    print("Rendered four original pages and a two-page chapter PDF.")


def resume():
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_LEFT
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

    destination = ROOT / "public/downloads/preston-wimberly-resume.pdf"
    destination.parent.mkdir(exist_ok=True)
    ink = colors.HexColor("#252624")
    blue = colors.HexColor("#39566a")
    body = ParagraphStyle("Body", fontName="Helvetica", fontSize=10, leading=14.5, textColor=ink, spaceAfter=7, alignment=TA_LEFT)
    title = ParagraphStyle("Name", parent=body, fontName="Helvetica-Bold", fontSize=27, leading=32, spaceAfter=4)
    label = ParagraphStyle("Label", parent=body, fontName="Helvetica-Bold", fontSize=9, leading=13, textColor=blue, spaceBefore=13, spaceAfter=7)
    role = ParagraphStyle("Role", parent=body, fontName="Helvetica-Bold", fontSize=10, leading=14, spaceBefore=5, spaceAfter=3)
    story = []
    def add(text, style=body):
        story.append(Paragraph(text, style))

    add("Preston Wimberly", title)
    add("CREATIVE DIRECTOR  /  WRITER  /  ART DIRECTION", label)
    add('San Marcos, Texas · Salt Lake City, Utah<br/><link href="mailto:preston.wimberly@gmail.com">preston.wimberly@gmail.com</link> · <link href="https://work.prestonwimberly.com/">work.prestonwimberly.com</link>')
    story.extend([Spacer(1, 8), HRFlowable(width="100%", thickness=0.6, color=blue), Spacer(1, 10)])
    add("I set the creative direction for businesses and carry it through writing, photography, and design. My work spans aviation, musical instruments, music history, and long-form editorial projects.")
    add("SELECTED CREATIVE WORK", label)
    add("Wimberly Custom Guitars — Founder / Creative Director", role)
    add("Led positioning, model naming, writing, art direction, and the website for a small-run guitar workshop. Developed product and workshop decisions with Jim Wimberly; led the brand and public expression. Current offer: a waitlist.")
    add("Texas Aviation Partners — Creative Director / Brand Strategy", role)
    add("Set positioning and created copy, original airport photography, visual design, and implementation for a proposed website redesign. Organized the company’s services around operate, develop, and advise. Developed the work directly with company leadership.")
    add("The Wild Feathers — Independent Editorial Archive", role)
    add("Researched, wrote, designed, and built an archive connecting 384 performance records, 193 archive records, and 110 source records. Seven flagship stories and six chronological chapters distinguish documented history from attributed memory.")
    add("SANDPAPER — Writer / Book Design", role)
    add("Completed a 50,000-word memoir in three parts and 38 chapters. Designed and typeset the 141-page manuscript in EB Garamond.")
    add("BACKGROUND", label)
    add("Texas Monthly — Advertising sales, 2008–2011", role)
    add("The Wild Feathers — Lead guitarist, songwriter, and pedal steel player through the band’s Warner Bros. years; contributed photography and album artwork. Later toured and recorded with Jamestown Revival.")
    add("Two decades across studio recording, television, and touring on guitar, pedal steel, and bass. Independent session practice at prestonwimberly.com.")
    add("PRACTICE", label)
    add("Brand strategy · Creative direction · Writing and editing · Art direction · Photography · Editorial and website design")
    document = SimpleDocTemplate(str(destination), pagesize=(612, 792), rightMargin=48, leftMargin=48, topMargin=40, bottomMargin=36, title="Preston Wimberly — Creative Director", author="Preston Wimberly")
    document.build(story)
    print(destination)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["pages", "resume"])
    parser.add_argument("source", nargs="?")
    args = parser.parse_args()
    if args.mode == "pages":
        if not args.source:
            parser.error("pages requires the original manuscript path")
        pages(args.source)
    else:
        resume()
