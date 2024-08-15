export default function Bonus() {
  return (
    <main className={"flex min-h-screen flex-col items-center "}>
      <h2>
        why the result of (&apos;b&apos; + &apos;a&apos; + + &apos;a&apos; +
        &apos;a&apos;).toLowerCase() is banana.
      </h2>
      <p>Answer:</p>
      <p>
        The + operator converts a string to number but if it fails it will
        result to NaN.
      </p>
      <p>
        +&apos;a&apos; it converts a to number but it fails thus resulting to
        NaN.
      </p>
      <p>
        Does resulting to baNaNa after concatenation then toLowerCase() will
        turn it to banana.
      </p>
    </main>
  );
}
