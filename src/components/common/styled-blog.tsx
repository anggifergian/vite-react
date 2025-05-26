export const mdxComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mt-8 mb-[40px] text-center text-balance" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mt-6 mb-3 " {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl md:text-2xl text-gray-900 font-medium mt-5 mb-2 " {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-gray-700 mb-2 text-[16px] leading-[1.8]" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-blue-500 hover:underline" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc list-inside mb-4" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside mb-4" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="mb-1 text-gray-700" {...props} />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm"
      {...props}
    />
  ),
  code: (props: React.ComponentProps<"code">) => <code className="" {...props} />,
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4"
      {...props}
    />
  ),
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="my-8 border-t border-gray-50" {...props} />
  ),
};
