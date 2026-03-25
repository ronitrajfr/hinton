"use client";

export default function Footer() {
  return (
    <footer
      className="border-t mt-16 py-16"
      style={{ borderTopColor: "var(--border-medium)" }}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="font-display font-bold text-lg text-white">
          HINTON
        </a>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-xs font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            API Reference
          </a>
          <a
            href="#"
            className="text-xs font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Support
          </a>
          <a
            href="#"
            className="text-xs font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-main)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
