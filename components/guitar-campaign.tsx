import { ResponsiveImage } from "@/components/responsive-image";

export function GuitarCampaign() {
  return (
    <section className="campaign" aria-labelledby="campaign-title">
      <header className="case-section-heading">
        <p className="section-number">Campaign extension<br />Speculative · Not launched</p>
        <div><h2 id="campaign-title">The next chapter is yours.</h2>
          <p>A proposed campaign for players considering a small-workshop guitar. The creative premise: an instrument’s most personal qualities come from the life its owner gives it.</p>
          <p>One invitation, expressed in print, a social sequence, and a letter from the bench. Concept and copy developed for this portfolio; these are proposed executions, not client results.</p>
        </div>
      </header>
      <figure className="campaign-print">
        <div className="campaign-print-image"><ResponsiveImage src="/images/wimberly-jack-antique-bronze-knobs.jpeg" alt="Walnut guitar body, tooled leather pickguard, and bronze control knobs" sizes="(max-width: 760px) 100vw, 75vw" /></div>
        <div className="campaign-print-copy"><p className="campaign-brand">Wimberly Custom Guitars</p><h3>The next chapter<br />is yours.</h3><p>We choose the walnut. Work the leather. Shape the instrument.<br />The songs, the rooms, the marks it carries home: those belong to you.</p><span className="campaign-cta">Meet the Jack. Join the waitlist.</span></div>
        <figcaption>01 / Print advertisement concept · Existing product photograph</figcaption>
      </figure>
      <div className="campaign-social" aria-label="Three-frame social sequence concept">
        <article><span>02 / Social · Frame 1</span><h3>Start with<br />the wood.</h3><p>Walnut. Grain you can follow with a fingertip.</p></article>
        <article><span>Frame 2</span><h3>Let it<br />live.</h3><p>Leather under your hand. An instrument that takes on your habits.</p></article>
        <article><span>Frame 3</span><h3>The next chapter<br />is yours.</h3><p>Meet the Jack.<br />Join the Wimberly waitlist.</p></article>
      </div>
      <article className="campaign-letter">
        <div><p className="section-number">03 / Launch email concept</p><p className="campaign-subject">Subject: What happens after the workshop</p></div>
        <div><h3>We can build the guitar.<br />Only you can make it yours.</h3><p>There is a moment when an instrument leaves the bench and becomes someone else’s work. Different hands. A different room. A song we could never have imagined.</p><p>That is why we build with walnut and leather. Materials that belong in a working life, that carry something of the person using them.</p><p>The Jack begins here in our workshop. Its next chapter begins with you.</p><p className="campaign-cta">Explore the Jack. Join the waitlist.</p></div>
      </article>
    </section>
  );
}
