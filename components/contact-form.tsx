"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "./button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Thanks! I received your message and will reply within one business day.";
    }
    if (status === "error") {
      return "Something went wrong. Please try again or email robbie@appsbyrobbie.com.";
    }
    return "";
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("form-name", "contact");

    setStatus("submitting");
    try {
      const encoded = new URLSearchParams();
      formData.forEach((value, key) => {
        encoded.append(key, String(value));
      });

      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      form.reset();
      setMessage("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" readOnly />
        </label>
      </p>
      <div>
        <label className="block text-sm font-medium text-[var(--brand-navy)]">
          Name
        </label>
        <input
          required
          name="name"
          className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--brand-navy)] shadow-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-blue)] focus:ring-opacity-30"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--brand-navy)]">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--brand-navy)] shadow-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-blue)] focus:ring-opacity-30"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--brand-navy)]">
          What are you building?
        </label>
        <textarea
          required
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--brand-navy)] shadow-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-blue)] focus:ring-opacity-30"
          placeholder="Share goals, timeline, and any links you have."
        />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
        <p className="text-sm text-slate-200">
          Or email{" "}
          <a
            className="font-semibold text-[var(--brand-blue)]"
            href="mailto:robbie@appsbyrobbie.com"
          >
            robbie@appsbyrobbie.com
          </a>
        </p>
      </div>
      {statusMessage ? (
        <p
          className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--brand-navy)]"
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
