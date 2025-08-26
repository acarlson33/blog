export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-fit bg-pink-300/80 text-black">
      {children}
    </div>
  );
}
