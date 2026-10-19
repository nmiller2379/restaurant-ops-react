import { toDateTimeMs } from "../../utils/nextId";

export default function Header({ text }) {
  return (
    <header>
      <p className="text-secondary mb-1">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2>{text}</h2>
    </header>
  );
}
