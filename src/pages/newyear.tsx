import Head from 'next/head'
import NewYear from '@root/newYear/NewYear'

const NewYearPage = () => {
    return (
        <>
            <Head>
                <title key='title'>Happy New Year | Wilfred Lopez</title>
            </Head>
            <NewYear />
        </>
    )
}

export default NewYearPage
