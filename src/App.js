import {useEffect, useState} from "react";
import Layout from "./components/layout";
import { useFetch } from "./hooks/use.fetch.hook"
import {TablePurpose} from "./components/table.purpose";

const App = () => {
    const { GET } = useFetch()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        ;(async () => {
            setLoading(true)
            const response = await GET(`/division/all`)
            setLoading(false)
            if (!response) return
            setData(response.data)
        })()
    }, [])

  return (
      <>
          <Layout>
              <TablePurpose loading={loading} data={data} />
          </Layout>
      </>
  );
}

export default App;
