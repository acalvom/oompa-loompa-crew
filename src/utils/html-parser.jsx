import parse, { domToReact } from 'html-react-parser'

const tagReplacement = (name, children) =>
  ({
    h1: <h1 className="text-xl mb-1 font-semibold">{domToReact(children)}</h1>,
    p: <p className="text-md font-light italic">{domToReact(children)}</p>,
  })[name]

export const parseHtml = (text) =>
  parse(text, {
    replace: ({ name, children }) => tagReplacement(name, children),
  })
