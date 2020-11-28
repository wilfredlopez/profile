import Head from 'next/head'
import NewYear from '@root/newYear/NewYear'
interface Props {

}


const NewYearPage = (props: Props) => {
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
