"use client";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 w-full h-15 bg-black/80 backdrop-blur-2xl border-b z-100 flex items-center"
      style={{ borderBottomColor: "var(--border-subtle)" }}
    >
      <div className="container flex justify-between items-center w-full">
        <a
          href="#"
          className="font-display font-bold text-xl text-white flex items-center gap-2"
        >
          HINTON
          <span className="inline-block w-2 h-4 bg-white animate-pulse"></span>
        </a>
        <div className="flex gap-8">
          <a
            href="#features"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Capabilities
          </a>
          <a
            href="#workflow"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Workflow
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Pricing
          </a>
        </div>
        <button
          className="btn btn-secondary"
          style={{ padding: "0.4rem 1rem", fontSize: "0.75rem" }}
        >
          Init Agent
        </button>
      </div>
    </nav>
  );
}
