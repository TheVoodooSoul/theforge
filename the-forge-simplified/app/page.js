export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>The Forge: Cinematic AI Action Generator</h1>
        <p>
          Create stunning action scenes for your next screenplay, novel, or game with our
          AI-powered scene generator. From high-octane car chases to epic battles,
          The Forge helps you craft compelling action sequences in seconds.
        </p>
        <a href="/generate" className="cta-button">
          Generate Your Scene
        </a>
      </section>

      <section>
        <h2>Features</h2>
        <div className="card-grid">
          <div className="card">
            <h3>AI-Powered Generation</h3>
            <p>
              Our advanced AI models understand action choreography, pacing, and
              cinematic techniques to create realistic and exciting scenes.
            </p>
          </div>
          <div className="card">
            <h3>Customizable Parameters</h3>
            <p>
              Control the intensity, setting, characters, and style of your
              action sequences to match your creative vision.
            </p>
          </div>
          <div className="card">
            <h3>Save & Export</h3>
            <p>
              Save your generated scenes to your dashboard and export them in
              various formats compatible with screenwriting software.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
