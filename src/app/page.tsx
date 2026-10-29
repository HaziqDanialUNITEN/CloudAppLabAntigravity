import React from "react";

interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  tag: string;
  tagType: "red" | "green" | "blue";
}

const hardwareArchitectureItems: CapabilityItem[] = [
  {
    number: "1.",
    title: "Unibody CNC Aluminum chassis.",
    description:
      "Precision-milled thermal casing with dual vapor chamber passive cooling.",
    tag: "THERMAL // PASSIVE",
    tagType: "red",
  },
  {
    number: "2.",
    title: "Dual high-speed expansion bus.",
    description:
      "PCIe 5.0 coprocessor connectors allow hot-swapping accelerator blocks.",
    tag: "PCIE 5.0 // HOT-SWAP",
    tagType: "blue",
  },
  {
    number: "3.",
    title: "OLED live telemetry strip.",
    description:
      "Displays real-time token throughput, memory saturation, and core thermal metrics.",
    tag: "TELEMETRY // LIVE",
    tagType: "green",
  },
  {
    number: "4.",
    title: "Ultra-fast internal storage.",
    description:
      "Direct-attached NVMe storage supporting sustained 7,200 MB/s sequential read rates.",
    tag: "NVME // 7,200 MB/S",
    tagType: "blue",
  },
];

const computeRuntimeItems: CapabilityItem[] = [
  {
    number: "5.",
    title: "Instant bare-metal boot.",
    description:
      "Custom lightweight runtime initializes ready-to-infer in under two seconds.",
    tag: "BOOT // < 2.0S",
    tagType: "green",
  },
  {
    number: "6.",
    title: "Unified high-bandwidth memory.",
    description:
      "Delivers 800 GB/s continuous unified memory bus directly to tensor cores.",
    tag: "BUS // 800 GB/S",
    tagType: "blue",
  },
  {
    number: "7.",
    title: "Dynamic quantization engine.",
    description:
      "Real-time switching between 4-bit, 8-bit, and 16-bit floating point precision.",
    tag: "FP4 / FP8 / FP16",
    tagType: "red",
  },
];

const workflowIntegrationItems: CapabilityItem[] = [
  {
    number: "8.",
    title: "Local-first REST and WebSocket server.",
    description:
      "Zero-configuration API server listening on localhost port 8080.",
    tag: "LOCALHOST:8080",
    tagType: "blue",
  },
  {
    number: "9.",
    title: "Open format compliance.",
    description:
      "Native support for standard open-weight model checkpoints, pipelines, and scripts.",
    tag: "OPEN WEIGHTS",
    tagType: "green",
  },
  {
    number: "10.",
    title: "Hardware snapshot cache.",
    description:
      "Freezes active memory contexts to non-volatile flash for zero-wait resumption.",
    tag: "ZERO-WAIT CACHE",
    tagType: "red",
  },
];

const securitySovereigntyItems: CapabilityItem[] = [
  {
    number: "11.",
    title: "Physical network kill switches.",
    description:
      "Instant mechanical cutoffs for Ethernet, Wi-Fi 7, and Bluetooth radios.",
    tag: "AIR-GAP // HARD",
    tagType: "red",
  },
  {
    number: "12.",
    title: "Secure hardware enclave.",
    description:
      "Isolated cryptographic chip stores private keys and encrypts offline weights.",
    tag: "CRYPTO ENCLAVE",
    tagType: "green",
  },
  {
    number: "13.",
    title: "Fully open hardware schematics.",
    description:
      "Open-source device drivers and board layout files published under permissive licenses.",
    tag: "OPEN SCHEMATICS",
    tagType: "blue",
  },
  {
    number: "14.",
    title: "Whisper-quiet acoustic signature.",
    description:
      "Operates below 18 decibels even under sustained 90-watt computational loads.",
    tag: "< 18 DB // 90W",
    tagType: "green",
  },
  {
    number: "15.",
    title: "Integrated hardware terminal.",
    description:
      "Front-panel high-speed serial USB-C debugging port for raw kernel interaction.",
    tag: "USB-C SERIAL",
    tagType: "blue",
  },
];

function BadgePill({
  type,
  children,
}: {
  type: "red" | "green" | "blue";
  children: React.ReactNode;
}) {
  if (type === "green") {
    return (
      <span className="pill-green">
        <span className="status-dot-green" />
        {children}
      </span>
    );
  }
  if (type === "blue") {
    return (
      <span className="pill-blue">
        <span className="status-dot-blue" />
        {children}
      </span>
    );
  }
  return (
    <span className="pill-label">
      <span className="status-dot-red" />
      {children}
    </span>
  );
}

export default function VortexShowcasePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Telemetry Ticker */}
      <div className="ticker">
        <div className="ticker-inner">
          <div className="ticker-brand">
            <span className="status-dot-red" />
            <span>VORTEX ENGINE // DESKTOP NEURAL ACCELERATOR</span>
          </div>
          <div className="ticker-metrics">
            <span>BUS: 800 GB/S</span>
            <span>•</span>
            <span>COMPUTE: 180 TFLOPS FP16</span>
            <span>•</span>
            <span>TELEMETRY: 0 BYTES EXTERNAL</span>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="header">
        <div className="shell header-inner">
          <a href="#top" className="brand-mark">
            <span className="brand-dot" />
            <span>VORTEX ENGINE</span>
          </a>

          <nav className="nav-links" aria-label="Primary Navigation">
            <a href="#hardware" className="nav-link">
              Hardware Architecture
            </a>
            <a href="#compute" className="nav-link">
              Compute &amp; Runtime
            </a>
            <a href="#workflow" className="nav-link">
              Workflow
            </a>
            <a href="#security" className="nav-link">
              Security &amp; Audit
            </a>
            <a href="#numbers" className="nav-link">
              Key Numbers
            </a>
          </nav>

          <a href="#cta" className="button-dark header-cta">
            Reserve Founder Edition
          </a>
        </div>
      </header>

      <main id="top" style={{ flex: 1 }}>
        {/* HERO SECTION + WHO THIS IS FOR + THE IDEA IN ONE LINE */}
        <section className="section-padding">
          <div className="shell">
            <div className="hero-layout">
              {/* Left Column: Title, Intro, CTAs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
                  <span className="pill-label">
                    <span className="status-dot-red" />
                    VORTEX ENGINE // DESKTOP NEURAL ACCELERATOR
                  </span>
                  <span className="pill-green">
                    <span className="status-dot-green" />
                    0 BYTES TELEMETRY
                  </span>
                  <span className="pill-blue">
                    <span className="status-dot-blue" />
                    LOCALHOST:8080
                  </span>
                </div>

                <h1 className="headline-display">
                  VORTEX ENGINE //{" "}
                  <span className="text-primary">
                    DESKTOP NEURAL ACCELERATOR
                  </span>
                </h1>

                <p className="body-lg text-on-surface" style={{ maxWidth: "640px" }}>
                  A dedicated, local AI hardware station engineered for privacy-first developers, researchers, and creators.
                </p>

                <div className="cta-actions">
                  <a href="#cta" className="button-primary">
                    Reserve your Founder Edition unit today with prioritized delivery.
                  </a>
                  <a href="#cta" className="button-ghost">
                    Inspect the open schematics and developer SDK documentation on GitHub.
                  </a>
                </div>
              </div>

              {/* Right Column: Telemetry Callout & Audience Card */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                {/* THE IDEA IN ONE LINE (Obsidian Headline Card with #F97066 primary-bright text per DESIGN.md) */}
                <div className="headline-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "var(--space-md)",
                      gap: "var(--space-sm)",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="label-md text-on-surface-muted">
                      THE IDEA IN ONE LINE
                    </span>
                    <span className="pill-green">
                      <span className="status-dot-green" />
                      SOVEREIGN SILICON
                    </span>
                  </div>
                  <p
                    className="headline-md text-primary-bright"
                    style={{ marginBottom: "var(--space-lg)" }}
                  >
                    Silicon-level sovereign intelligence right on your desk. No cloud tether, zero telemetry.
                  </p>

                  {/* Live OLED Telemetry Readout simulation */}
                  <div className="telemetry-readout-grid">
                    <div>
                      <div
                        className="label-sm text-on-surface-muted"
                        style={{ marginBottom: "6px" }}
                      >
                        MEMORY BUS
                      </div>
                      <div
                        className="label-md text-accent-green"
                        style={{ fontSize: "13px" }}
                      >
                        128 GB // 800 GB/S
                      </div>
                    </div>
                    <div>
                      <div
                        className="label-sm text-on-surface-muted"
                        style={{ marginBottom: "6px" }}
                      >
                        FP16 TENSOR
                      </div>
                      <div
                        className="label-md text-primary-bright"
                        style={{ fontSize: "13px" }}
                      >
                        180 TFLOPS
                      </div>
                    </div>
                    <div>
                      <div
                        className="label-sm text-on-surface-muted"
                        style={{ marginBottom: "6px" }}
                      >
                        ACOUSTIC LOAD
                      </div>
                      <div
                        className="label-md text-accent-blue"
                        style={{ fontSize: "13px" }}
                      >
                        &lt; 18 DB @ 90W
                      </div>
                    </div>
                  </div>
                </div>

                {/* WHO THIS IS FOR */}
                <div className="card-callout">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "var(--space-sm)",
                      gap: "var(--space-sm)",
                    }}
                  >
                    <span className="label-md text-primary">
                      WHO THIS IS FOR
                    </span>
                    <span className="label-sm text-primary-ink">
                      TARGET PROFILE
                    </span>
                  </div>
                  <p
                    className="body-md text-primary-ink"
                    style={{ fontWeight: 500 }}
                  >
                    Engineers, hackers, and creators running high-parameter local models who require instant responsiveness, zero latency, and absolute data sovereignty without monthly cloud subscriptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* KEY NUMBERS FOR THE PAGE */}
        <section
          id="numbers"
          className="section-padding bg-surface-muted"
        >
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-2xl)",
              }}
            >
              <div>
                <span className="pill-label">KEY NUMBERS FOR THE PAGE</span>
              </div>
              <h2 className="headline-lg">KEY NUMBERS FOR THE PAGE</h2>
            </div>

            <div className="stat-grid">
              {/* Stat 1 */}
              <div className="stat-cell-hot">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="pill-label">UNIFIED MEMORY</span>
                  <span className="label-sm text-on-surface-muted">
                    01 // RAM
                  </span>
                </div>
                <div className="stat-number text-primary">
                  128 GB
                </div>
                <p className="body-md text-on-surface-strong" style={{ fontWeight: 600 }}>
                  128 GB unified memory bandwidth on your physical desk.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="stat-cell">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="pill-blue">
                    <span className="status-dot-blue" />
                    TENSOR COMPUTE
                  </span>
                  <span className="label-sm text-on-surface-muted">
                    02 // FP16
                  </span>
                </div>
                <div className="stat-number text-on-surface-strong">
                  180 TFLOPs
                </div>
                <p className="body-md text-on-surface-strong" style={{ fontWeight: 600 }}>
                  180 TFLOPs of local FP16 neural tensor compute.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="stat-cell">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="pill-green">
                    <span className="status-dot-green" />
                    ZERO TELEMETRY
                  </span>
                  <span className="label-sm text-on-surface-muted">
                    03 // PRIVACY
                  </span>
                </div>
                <div className="stat-number text-accent-green">
                  0 bytes
                </div>
                <p className="body-md text-on-surface-strong" style={{ fontWeight: 600 }}>
                  0 bytes of external data transmission or cloud telemetry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SECTION 1: HARDWARE ARCHITECTURE & FOUNDATION (Items 1-4) */}
        <section id="hardware" className="section-padding">
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-2xl)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                <span className="pill-label">SECTION 01 // SPECS 01–04</span>
                <span className="pill-blue">CHASSIS &amp; I/O</span>
              </div>
              <h2 className="headline-lg">HARDWARE ARCHITECTURE &amp; FOUNDATION</h2>
            </div>

            <div className="grid-2">
              {hardwareArchitectureItems.map((item) => (
                <article key={item.number} className="card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-sm)",
                    }}
                  >
                    <span className="spec-index">{item.number}</span>
                    <BadgePill type={item.tagType}>{item.tag}</BadgePill>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                    <h3 className="headline-md">
                      {item.number} {item.title}
                    </h3>
                    <p className="body-md text-on-surface">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SECTION 2: COMPUTE & REAL-TIME RUNTIME (Items 5-7) — Obsidian Dark Section */}
        <section id="compute" className="section-dark">
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-2xl)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", flexWrap: "wrap" }}>
                <span className="pill-green">
                  <span className="status-dot-green" />
                  SECTION 02 // SPECS 05–07
                </span>
                <span className="pill-blue">
                  <span className="status-dot-blue" />
                  TENSOR ENGINE
                </span>
              </div>
              <h2 className="headline-lg text-on-secondary">
                COMPUTE &amp; REAL-TIME RUNTIME
              </h2>
            </div>

            <div className="grid-3">
              {computeRuntimeItems.map((item) => (
                <article key={item.number} className="dark-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-sm)",
                    }}
                  >
                    <span className="label-md dark-spec-index">
                      {item.number}
                    </span>
                    <BadgePill type={item.tagType}>{item.tag}</BadgePill>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                    <h3 className="headline-md text-on-secondary">
                      {item.number} {item.title}
                    </h3>
                    <p className="body-md text-on-surface-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SECTION 3: WORKFLOW & SYSTEM INTEGRATION (Items 8-10) */}
        <section
          id="workflow"
          className="section-padding bg-surface-2"
        >
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-2xl)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", flexWrap: "wrap" }}>
                <span className="pill-blue">
                  <span className="status-dot-blue" />
                  SECTION 03 // SPECS 08–10
                </span>
                <span className="pill-label">DEVELOPER PIPELINE</span>
              </div>
              <h2 className="headline-lg">WORKFLOW &amp; SYSTEM INTEGRATION</h2>
            </div>

            <div className="grid-3">
              {workflowIntegrationItems.map((item) => (
                <article key={item.number} className="card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-sm)",
                    }}
                  >
                    <span className="spec-index">{item.number}</span>
                    <BadgePill type={item.tagType}>{item.tag}</BadgePill>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                    <h3 className="headline-md">
                      {item.number} {item.title}
                    </h3>
                    <p className="body-md text-on-surface">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SECTION 4: SECURITY, SOVEREIGNTY & AUDIT (Items 11-15) */}
        <section id="security" className="section-padding">
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-2xl)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", flexWrap: "wrap" }}>
                <span className="pill-label">
                  <span className="status-dot-red" />
                  SECTION 04 // SPECS 11–15
                </span>
                <span className="pill-green">
                  <span className="status-dot-green" />
                  VERIFIED SOVEREIGNTY
                </span>
              </div>
              <h2 className="headline-lg">SECURITY, SOVEREIGNTY &amp; AUDIT</h2>
            </div>

            <div className="grid-2" style={{ marginBottom: "var(--space-lg)" }}>
              {securitySovereigntyItems.slice(0, 2).map((item) => (
                <article key={item.number} className="card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-sm)",
                    }}
                  >
                    <span className="spec-index">{item.number}</span>
                    <BadgePill type={item.tagType}>{item.tag}</BadgePill>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                    <h3 className="headline-md">
                      {item.number} {item.title}
                    </h3>
                    <p className="body-md text-on-surface">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid-3">
              {securitySovereigntyItems.slice(2).map((item) => (
                <article key={item.number} className="card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-sm)",
                    }}
                  >
                    <span className="spec-index">{item.number}</span>
                    <BadgePill type={item.tagType}>{item.tag}</BadgePill>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                    <h3 className="headline-md">
                      {item.number} {item.title}
                    </h3>
                    <p className="body-md text-on-surface">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider-strong" />

        {/* CALL TO ACTION SECTION */}
        <section id="cta" className="section-padding">
          <div className="shell">
            <div className="cta-banner">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                <div>
                  <span className="pill-label">
                    <span className="status-dot-red" />
                    CALL TO ACTION
                  </span>
                </div>
                <h2 className="headline-lg">CALL TO ACTION</h2>
                <p className="body-lg text-on-surface">
                  Reserve your Founder Edition unit today with prioritized delivery.
                </p>
                <p className="body-md text-on-surface-variant">
                  Inspect the open schematics and developer SDK documentation on GitHub.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-md)",
                }}
              >
                <a href="#reserve" className="button-primary" style={{ width: "100%" }}>
                  Reserve your Founder Edition unit today with prioritized delivery.
                </a>
                <a href="#github" className="button-ghost" style={{ width: "100%" }}>
                  Inspect the open schematics and developer SDK documentation on GitHub.
                </a>
                <div className="card-nested" style={{ marginTop: "var(--space-xs)" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-sm)",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="label-sm text-on-surface-strong">
                      BATCH 01 // FOUNDER EDITION
                    </span>
                    <span className="pill-green">
                      <span className="status-dot-green" />
                      OPEN SCHEMATICS READY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER NOTE */}
      <footer className="footer">
        <div className="shell">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "var(--space-md)",
              }}
            >
              <div className="brand-mark">
                <span className="brand-dot" />
                <span>VORTEX ENGINE // DESKTOP NEURAL ACCELERATOR</span>
              </div>
              <span className="label-sm text-on-surface-muted">
                FOOTER NOTE
              </span>
            </div>

            <hr className="divider" />

            <p className="body-sm text-on-surface-variant">
              Vortex Engine is an independent hardware project. Specifications and component layouts are subject to continuous refinement before commercial manufacturing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
