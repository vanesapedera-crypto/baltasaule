import { permanentRedirect } from "next/navigation";

/** Vietne tagad ir vienā lapā — vecā adrese ved uz atbilstošo sadaļu. */
export default function Page() {
  permanentRedirect("/#kontakti");
}
