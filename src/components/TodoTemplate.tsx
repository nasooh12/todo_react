export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "360px", margin: "50px auto" }}>
      {children}
    </div>
  );
}
