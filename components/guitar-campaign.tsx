import { ResponsiveImage } from "@/components/responsive-image";

export function GuitarCampaign() {
  return (
    <section className="campaign" aria-labelledby="campaign-title">
      <header className="case-section-heading">
        <p className="section-number">Campaign extension<br />Speculative · Not launched</p>
        <div><h2 id="campaign-title">The mark you’d never fix.</h2>
          <p>A campaign concept for players considering a small-workshop guitar. The premise to explore with musicians: a mark can become the part of an instrument they most want to keep.</p>
          <p>Print introduces a new guitar. A proposed film and social series ask players about instruments they already own. An email invites a story. Concept and copy developed for this portfolio; interviews and filming remain to be produced.</p>
        </div>
      </header>
      <figure className="campaign-print">
        <header className="campaign-print-heading"><p className="campaign-brand">Wimberly Custom Guitars</p><h3>The first mark<br />is yours.</h3></header>
        <div className="campaign-print-image"><ResponsiveImage src="/images/wimberly-jack-antique-bronze-knobs.jpeg" alt="Walnut guitar body, tooled leather pickguard, and bronze control knobs" sizes="(max-width: 760px) 100vw, 75vw" objectFit="contain" /></div>
        <div className="campaign-print-copy"><p className="campaign-print-premise">We choose the walnut.<br />Work the leather.<br />Shape the instrument.</p><div><p>The spot your hand returns to, the buckle that gets too close, the night you forget to put it back in its case. You’ll know where those marks came from.</p><span className="campaign-cta">Meet the Jack. Join the waitlist.</span></div></div>
        <figcaption>01 / Print advertisement concept · Existing product photograph; no wear added</figcaption>
      </figure>
      <details className="campaign-treatments">
        <summary>Proposed film, social &amp; email treatments</summary>
      <section className="campaign-film" aria-labelledby="campaign-film-title">
        <header><p className="section-number">02 / Short film treatment · 30 seconds</p><h3 id="campaign-film-title">Show me the one you’d keep.</h3><p>A player, their own guitar, and one mark with a story. Record the answer in their words, then let them play.</p></header>
        <ol className="campaign-film-beats">
          <li><span>00–05</span><div><h4>The mark</h4><p>Open close on the player’s finger finding a worn spot. Hear the room. Ask: “What happened here?”</p></div></li>
          <li><span>05–17</span><div><h4>The person</h4><p>Reveal the player and the instrument. Keep one specific, recorded answer about how the mark got there and why it stays.</p></div></li>
          <li><span>17–26</span><div><h4>The sound</h4><p>Let the player perform a phrase on that guitar. Hold on the hands; keep the sound from the room.</p></div></li>
          <li><span>26–30</span><div><h4>The invitation</h4><p>Cut to the Jack in the workshop. End line: “The first mark is yours.” Wimberly Custom Guitars. Join the waitlist.</p></div></li>
        </ol>
        <p className="campaign-production-note">Proposed production: cast and credit the player, identify their existing instrument, and clear their story and music before use. No participant, testimonial, or recorded performance is presented here.</p>
      </section>
      <div className="campaign-social" aria-label="Three-frame social sequence concept">
        <article><span>03 / Player story · Frame 1</span><h3>Which mark<br />would you keep?</h3><p>Open on a detail from the player’s guitar. Let the question make someone stop.</p></article>
        <article><span>Frame 2</span><h3>How did<br />it get there?</h3><p>Pair the player’s portrait with a short excerpt from their recorded answer, credited by name.</p></article>
        <article><span>Frame 3</span><h3>Let’s hear it.</h3><p>End with the player performing. Invite the audience to share a mark and the story behind it.</p></article>
      </div>
      <p className="campaign-production-note">Social sequence treatment. Each edition would use a different player’s photographs, words, and performance.</p>
      <article className="campaign-letter">
        <div><p className="section-number">04 / Launch email concept</p><p className="campaign-subject">Subject: The mark you’d never fix</p></div>
        <div><h3>There’s probably a story there.</h3><p>Look at the guitar you’ve kept the longest. Is there a mark you can place? A room, a person, a night?</p><p>We’d like to hear about it. Reply with a photograph and tell us what happened.</p><p>Here at Wimberly, we’re building the Jack from walnut, hand-tooled leather, and metal. We can show you what leaves the bench. We’re interested in what happens after.</p><p className="campaign-cta">Meet the Jack. Join the waitlist.</p></div>
      </article>
      </details>
    </section>
  );
}
