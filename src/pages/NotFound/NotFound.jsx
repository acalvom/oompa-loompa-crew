import { Layout } from "@/layout"

export const NotFound = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-md font-semibold mb-4  ">This page does not exist</p>
    </Layout>
  )
}

export default NotFound
