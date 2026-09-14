import { ResponsiveImage } from "@/components/responsive-image";

export function GuitarCampaign() {
  return (
    <section className="campaign" aria-labelledby="campaign-title">
      <header className="case-section-heading">
        <p className="section-number">Campaign extension<br />Speculative · Not launched</p>
        <div><h2 id="campaign-title">The mark you’d never fix.</h2>
          <p>A campaign concept for players considering a small-workshop guitar. The audience hypothesis: some players value an instrument more as use leaves a record on it. That idea needs to earn interest in Wimberly’s walnut, hand-tooled leather, and metal as well as invite a story.</p>
          <p>Player stories would introduce the subject; close views of the Jack would show how the workshop’s material choices give it a specific expression. Each execution would lead to the model and materials, then the waitlist. Concept and copy developed for this portfolio; interviews and filming remain to be produced.</p>
        </div>
      </header>
      <figure className="campaign-print">
        <header className="campaign-print-heading"><p className="campaign-brand">Wimberly Custom Guitars</p><h3>The first mark<br />is yours.</h3></header>
        <div className="campaign-print-image"><ResponsiveImage src="/images/wimberly-jack-antique-bronze-knobs.jpeg" alt="Walnut guitar body, tooled leather pickguard, and bronze control knobs" sizes="(max-width: 760px) 100vw, 75vw" objectFit="contain" /></div>
        <div className="campaign-print-copy"><p className="campaign-print-premise">We choose the walnut.<br />Work the leather.<br />Shape the instrument.</p><div><p>Meet the Jack: walnut, hand-tooled leather, and antique bronze hardware. The grain and tooling are already there. The marks from the years you play it will be yours.</p><span className="campaign-cta">Explore the Jack’s materials. Join the waitlist.</span></div></div>
        <figcaption>01 / Print advertisement concept · Existing product photograph; no wear added</figcaption>
      </figure>
      <details className="campaign-treatments">
        <summary>Proposed rollout, film, social &amp; email treatments</summary>
      <section className="campaign-film" aria-labelledby="campaign-rollout-title">
        <header><p className="section-number">Proposed rollout · Not run</p><h3 id="campaign-rollout-title">From a player’s story to the Jack.</h3><p>Start with one recorded player story and a companion material study of the Jack. Use a short social edit to introduce the story, the workshop website to connect it to the instrument, and email to continue the conversation with people who have opted in.</p></header>
        <ol className="campaign-film-beats">
          <li><span>01</span><div><h4>Reach the player</h4><p>Publish the short edit on the workshop’s social channels. Invite the featured musician to share it, with permission. Keep print as a supporting concept until a placement and budget are defined.</p></div></li>
          <li><span>02</span><div><h4>Make the product worth examining</h4><p>Pair the story with close views of the Jack’s walnut, leather, and hardware. Link to the model and materials, with the waitlist as the next step for interested players.</p></div></li>
          <li><span>03</span><div><h4>Learn before expanding</h4><p>Track visits from each campaign link and completed waitlist signups. Read replies for questions about the instrument. If stories attract attention without model visits, test a more direct product opening; if visits produce few signups, investigate the unanswered questions before increasing distribution.</p></div></li>
        </ol>
        <p className="campaign-production-note">This is a proposed test plan. Distribution, tracking, participant permissions, and production would need to be arranged before launch. No audience research, campaign response, or sales result is claimed.</p>
      </section>
      <section className="campaign-film" aria-labelledby="campaign-film-title">
        <header><p className="section-number">02 / Short film treatment · 30 seconds</p><h3 id="campaign-film-title">Show me the one you’d keep.</h3><p>A player, their own guitar, and one mark with a story. Record the answer in their words, then let them play.</p></header>
        <ol className="campaign-film-beats">
          <li><span>00–05</span><div><h4>The mark</h4><p>Open close on the player’s finger finding a worn spot. Hear the room. Ask: “What happened here?”</p></div></li>
          <li><span>05–17</span><div><h4>The person</h4><p>Reveal the player and the instrument. Keep one specific, recorded answer about how the mark got there and why it stays.</p></div></li>
          <li><span>17–26</span><div><h4>The sound</h4><p>Let the player perform a phrase on that guitar. Hold on the hands; keep the sound from the room.</p></div></li>
          <li><span>26–30</span><div><h4>The invitation</h4><p>Cut to the Jack’s walnut, tooled leather, and bronze hardware. Identify it as a new Wimberly instrument. End line: “The first mark is yours.” Explore the Jack. Join the waitlist.</p></div></li>
        </ol>
        <p className="campaign-production-note">Proposed production: cast and credit the player, identify their existing instrument, and clear their story and music before use. No participant, testimonial, or recorded performance is presented here.</p>
      </section>
      <div className="campaign-social" aria-label="Three-frame social sequence concept">
        <article><span>03 / Player story · Frame 1</span><h3>Which mark<br />would you keep?</h3><p>Open on a detail from the player’s guitar. Let the question make someone stop.</p></article>
        <article><span>Frame 2</span><h3>How did<br />it get there?</h3><p>Pair the player’s portrait with a short excerpt from their recorded answer, credited by name.</p></article>
        <article><span>Frame 3</span><h3>The first mark<br />is yours.</h3><p>Show the Jack’s walnut, leather, and hardware, clearly identified as a new Wimberly guitar. Link to its model and materials, then the waitlist.</p></article>
      </div>
      <p className="campaign-production-note">Social sequence treatment. Each edition would pair a different player’s photographs and words with the Jack’s material details.</p>
      <article className="campaign-letter">
        <div><p className="section-number">04 / Launch email concept</p><p className="campaign-subject">Subject: The mark you’d never fix</p></div>
        <div><h3>There’s probably a story there.</h3><p>Look at the guitar you’ve kept the longest. Is there a mark you can place? A room, a person, a night?</p><p>Here at Wimberly, the Jack begins with walnut, hand-tooled leather, and antique bronze hardware. Take a closer look at the materials and join the waitlist to follow the workshop.</p><p>And if there’s a mark you’d never fix, reply and tell us why you’ve kept it.</p><p className="campaign-cta">Explore the Jack’s materials. Join the waitlist.</p></div>
      </article>
      </details>
    </section>
  );
}
