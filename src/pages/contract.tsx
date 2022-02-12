import React, { useState } from 'react'


const RAW__TEXT = `
{CONTRACT_DATE}
{PRODUCER_ALIAS} -w- {CUSTOMER_ALIAS} / Producer Agreement / "{TRACK_TITLE}"
The following sets forth the material terms and conditions with respect to {PRODUCER_ALIAS} ("Producer", "me", "we", or the like) producing certain recording(s) embodying the musical performance of {CUSTOMER_ALIAS} ("Artist", "you", "your", or the like). In the event the number of master recordings hereunder is no more than one (1), then all references to "Masters" hereunder shall be read and deemed to refer to one (1) "Master." For good and valuable consideration (the receipt and sufficiency of which is hereby acknowledged), the parties hereby agree as follows:
Product Commitment: Producer shall produce one (1) musical composition entitled "{TRACK_TITLE}" (the "Composition") embodying Artist's featured performance of a yet-to-be-titled master recording (the "Master") for delivery to Artist for, among other exploitations, the manufacture and distribution of records. For the avoidance of doubt, the Composition provided by Producer to create the Master shall be solely retained and owned by Producer as a pre-existing composition, and the composition made by Artist hereunder is a derivative. The territory of this agreement shall be the Universe. Artist acknowledges the satisfactory delivery, receipt, and acceptance of the Master.
Rights: The Master (expressly excluding the underlying musical composition), from the inception of creation, shall be considered a "work made for hire" for Artist (or Artist's designees) within the meaning of the Copyright Act of 1976 (Title 17, U.S.C.). If it is determined that any Master does not so qualify, then that Master, together with all rights therein (including the sound recording copyright(s) but excluding the underlying musical composition) shall hereby be deemed transferred to Artist. Subject to the terms and conditions contained in this agreement, Artist shall have the sole and exclusive right in perpetuity and throughout the universe, including, without limitation: (i) to manufacture, advertise, sell, license or, otherwise dispose of the Master and derivatives derived therefrom in any manner or media whatsoever upon such terms, and under such trademarks, as Artist elects, or, in Artist's sole discretion, to refrain therefrom; (ii) to perform the Master publicly and to permit the public performance thereof by any method now or hereafter known; and (iii) to include Producer's audio performance in an audio-visual production ("Video"). Notwithstanding the foregoing, Artist (or its designees) shall have no right to make any edits/changes to Producer's composition; no right to use Producer's composition apart from the Master; and no right to use Producer's composition in a way to imply any sort of endorsement.
Fee: Artist shall pay to Producer a non-returnable, non-recoupable fee in the amount of {TRACK_PRICE_WORD}, \${TRACK_PRICE} USD (the "Fee"). The Fee shall be payable upon the full execution of this agreement.
Controlled Compositions: If any selection or musical composition, or any portion thereof, recorded in the Masters hereunder is written or composed by Producer, in whole or in part, alone or in collaboration with others, or is owned or controlled, in whole or in part, directly or indirectly, by Producer or any person, firm, or corporation in which Producer has a direct or indirect interest, then such selection and/or musical composition shall be hereinafter referred to as a "Controlled Composition". Producer hereby agrees to issue or cause to be issued, as applicable, to Artist, or Artist's designees, mechanical licenses (including, without limitation, any "first use" mechanical licenses) and other licenses in respect of each Controlled Composition subject to the same terms and conditions as are applicable to selections and musical compositions written, composed, owned, or controlled, in whole or in part, directly or indirectly, by Artist, which are embodied on the Master or any recording recorded under this agreement. For that license, on the United States and Canada sales, Artist will pay mechanical royalties at one hundred percent (100%) of the minimum statutory rate, subject to no cap of that rate for albums and/or EPs. For license outside the United States and Canada, the mechanical royalty rate will be the rate prevailing on an industry-wide basis in the country concerned on the date that this agreement has been entered into. Producer hereby grants Artist a license to reproduce Controlled Compositions that are embodied on the Master produced hereunder in synchronization with and in time relation to visual images featuring Artist's performances in so-called promotional "video programs", on a royalty-free basis and in so-called commercial "video programs", in being understood that Producer shall be entitled to Producer's pro-rata share of any royalties attributable to such commercial "video programs". Upon Artist's request Producer shall execute or cause Producer's publishing designee to execute and deliver to Artist, as applicable, all documents required by Artist, as applicable, to effectuate the purpose of this paragraph.
Publishing Rights: With respect to the publishing rights and ownership of the underlying composition embodied in the Master, the Artist, and the Producer hereby acknowledge and agree that the underlying composition shall be owned/split between them as follows:
{PUBLISHING_RIGHTS}
Credit and Likeness: Artist shall have the right to use and permit others to use Producer's approved name, approved likeness, and other approved identification and approved biographical material concerning the Producer for purposes of trade and otherwise without restriction solely in connection with the Masters recorded hereunder. Artist shall accord (or shall cause to accord) Producer a credit on (i) labels and liner notes of the Master, where applicable, (ii) in all configurations (including in applicable meta-data) derived from the Master, (iii) in all trade and consumer advertisements, including Billboard Magazine strip ads, which pertain exclusively to the Masters hereunder, that are one-quarter (1/4) page or larger in size, placed directly by Artist, and appear in so-called "nationwide" trade publications in the United States. Artist shall ensure that Producer is properly credited and Artist shall check all proofs for the accuracy of credits, and shall cure any mistakes regarding Producer's credit. Such credit shall be in the substantial form: "Produced by {PRODUCER_ALIAS}".
Warranties, Representations, and Indemnification:
Producer warrants and represents that he has the full right and ability to enter into this agreement, and is not under any disability, restriction, or prohibition with respect to the grant of rights hereunder. Producer warrants that the manufacture, sale, distribution, or other exploitation of the Masters hereunder will not infringe upon or violate any common law or statutory right of any person, firm, or corporation; including, without limitation, contractual rights, copyrights, and right(s) of privacy and publicity and will not constitute libel and/or slander. Artist warrants and represents that he has the full right and ability to enter into this agreement, and is not under any disability, restriction, or prohibition with respect to the grant of rights hereunder. Artist warrants that the manufacture, sale, distribution, or other exploitation of the Masters hereunder will not infringe upon or violate any common law or statutory right of any person, firm, or corporation; including, without limitation, contractual rights, copyrights, and right(s) of privacy and publicity and will not constitute libel and/or slander. The foregoing notwithstanding, Producer undertakes no responsibility whatsoever as to any elements added to the Masters by Artist, and Artist indemnifies and holds Producer harmless for any such elements. Producer warrants that he shall not "sample" (as that term is commonly understood in the recording industry) any copyrighted material or sound recordings belonging to any other person, firm, or corporation (hereinafter referred to as "Owner") without first having notified Artist and obtaining Artist's consent. Artist shall have no obligation to approve the use thereof; however, if approved, any payment in connection therewith, including any associated legal clearance costs, shall constitute an additional recording cost and expense and shall be borne by Artist. Knowledge by Artist that "samples" were used by Producer, which was not affirmatively disclosed by Producer to Artist, shall shift, in whole or in part, the liability for infringement or violation of the rights of any third party arising from the use of any such "sample" from Producer to Artist. At Artist's request, Producer shall cooperate with respect to any matters concerning "sampling" which may arise hereunder. The parties acknowledge that Producer did not incorporate any "samples" in the Master hereunder.
Artist hereby agrees that Producer has not made any guarantees or promises that the Master fits the particular creative use or musical purpose intended or desired by the Artist. The Master, its sound recording, and the Composition embodied therein are delivered to the Artist "as is" without warranties of any kind of fitness for a particular purpose. Artist further acknowledges and agrees that the Composition produced by Producer may previously have been licensed to third parties on a non-exclusive basis. Any licenses granted by Producer, which precede this agreement, shall remain in effect and shall not be affected by this agreement. Artist waives any claims against Producer for any pre-existing licenses for the Composition. Artist further agrees that Artist will not submit any claims against the third-party licensees for their non-exclusive use of the Composition.
Parties hereto shall indemnify and hold each other harmless from any and all third party claims, liabilities, costs, losses, damages or expenses as are actually incurred by the non-defaulting party and shall hold the non-defaulting party, free, safe, and harmless against and from any and all claims, suits, demands, costs, liabilities, loss, damages, judgments, recoveries, costs, and expenses; (including, without limitation, reasonable outside attorneys' fees), which may be made or brought, paid, or incurred by reason of any breach or claim of breach of the warranties and representations hereunder by the defaulting party, their agents, heirs, successors, assigns and employees, which have been reduced to final judgment; provided that prior to final judgment, arising out of any breach of any representations or warranties of the defaulting party contained in this agreement or any failure by defaulting party to perform any obligations on its part to be performed hereunder the non-defaulting party has given the defaulting party prompt written notice of all claims and the right to participate in the defense with counsel of its choice at its sole expense. In no event shall Artist be entitled to seek injunctive or any other equitable relief for any breach or non-compliance with any provision of this agreement.
Miscellaneous: This agreement has been entered into in the {STATE_PROVINCE_COUNTRY} and the validity, interpretation, and legal effect of this agreement shall be governed by the laws of the {STATE_PROVINCE_COUNTRY} applicable to contracts entered into and performed entirely within such State. The courts of {STATE_PROVINCE_COUNTRY}, {STATE_PROVINCE_COUNTRY} (state and federal) only will have jurisdiction of any controversies regarding this agreement and the parties hereto consent to the jurisdiction of said courts. All notices, statements, and payments to be sent to any party hereunder shall be addressed to such party at the applicable address set forth on the first page hereof or at such other address as is designated in writing by the applicable party from time to time. All notices shall be in writing and shall either be served by personal delivery (with a written receipt of such delivery) or certified or registered mail, return receipt requested, all charges prepaid, except statements may be sent by regular U.S. mail. Except as otherwise provided herein, notices delivered in accordance with the foregoing shall be deemed given when personally delivered, or five (5) days after mailing, except that notices of change of address shall be effective only after actual receipt. Where approvals are required hereunder, such approval or consent shall not be unreasonably withheld and the parties acknowledge and agree that email confirmations/responses shall suffice. Producer shall not be entitled to any monies in connection with the Master(s) other than as specifically set forth herein. Producer shall have the right to assign this agreement to any parent, subsidiary, or affiliate, or any individual or entity owning or acquiring a substantial portion of Producer's stock or assets provided that Producer remains secondary liable. Artist may not assign any of Artist's rights or obligations hereunder without Producer's prior written consent and any such purported assignment shall be null and void ab initio. Both parties agree and acknowledge that this agreement (a) will be binding upon and inure to the benefit of the parties hereto and their respective successors, permitted assigns, heirs, estates, administrators, and executors; (b) embodies the sole and entire agreement of the parties in respect of, and supersedes all prior oral or written understandings between them concerning the subject matter hereof; and (c) may not be amended except by a written instrument signed by all parties hereto. A waiver by either party hereto of any provision of this agreement in any instance shall not be deemed to be a waiver for the future. All remedies, rights, undertakings, and obligations contained in this agreement shall be cumulative and none of them shall be in limitation of any other remedy, right, undertaking, or obligation of either party. Any breach by either party shall not be deemed material unless, within thirty (30) days (or fifteen (15) days for failure to pay monies owed) after the non-breaching party learns of such breach, the non-breaching party serves written notice thereof on the breaching party specifying the nature of the breach and the breaching party fails to cure such breach, if any, within thirty (30) days (15 days regarding payments) after receipt of such notice, or within a reasonable time thereafter if such breach is not curable within thirty (30) days. In entering into this agreement and providing services pursuant hereto, Artist has and shall have the status of an independent contractor and nothing herein contained shall contemplate or constitute Artist as Producer's agent or employee. ARTIST UNDERSTANDS THAT ARTIST HAS THE RIGHT TO SEEK THE ADVICE OF INDEPENDENT COUNSEL CONCERNING ITS RIGHTS, THE PROVISIONS HEREOF, AND THE ADVISABILITY OF EXECUTING THIS LEGALLY BINDING AGREEMENT. FURTHER, ARTIST ACKNOWLEDGES THAT PRODUCER HAS GIVEN ARTIST THE OPPORTUNITY TO SEEK THE ADVICE OF INDEPENDENT COUNSEL AND ARTIST ACKNOWLEDGES THAT ARTIST IS EXECUTING THIS AGREEMENT VOLUNTARILY AFTER CONSULTATION WITH INDEPENDENT COUNSEL OR INTENTIONALLY DECIDING NOT TO SEEK ADVICE OF INDEPENDENT COUNSEL.
This agreement may be executed via facsimile and in two or more counterparts, each of which shall be deemed an original, but all of which shall constitute one instrument. In addition, a signed copy of this agreement transmitted by facsimile, by digital signature, or scanned into an image file and transmitted via email shall, for all purposes, be treated as if it was delivered containing an original manual signature of the party whose signature appears thereon and shall be binding upon such party as though an originally signed document had been delivered.
`

const st = `  <style>


.container {
    margin-bottom: 5px;
}

.form-control {
    border: none !important;
}

.form-control label::after {
    content: "";
    display: block;
    WIDTH: 90vw;
}
</style>`

interface VARIABLE_DATA {
    CONTRACT_DATE: string,
    CUSTOMER_ALIAS: string,
    PRODUCT_TITLE: string,
    PRODUCT_PRICE: string,
    PRODUCT_PRICE_WORD: string,
}
interface PRODUCER {
    PRODUCER_ALIAS: string,
    PRODUCER_NAME: string,
    STATE_PROVINCE_COUNTRY: string,
}

const Contract = () => {

    const [variables, setVariables] = useState<VARIABLE_DATA>({
        CONTRACT_DATE: "",
        CUSTOMER_ALIAS: "",
        PRODUCT_TITLE: "",
        PRODUCT_PRICE: "",
        PRODUCT_PRICE_WORD: "",
    })
    const [producerVars, setProducerVars] = useState<PRODUCER>({
        PRODUCER_ALIAS: "",
        PRODUCER_NAME: "",
        STATE_PROVINCE_COUNTRY: "",
    })
    //@ts-check
    // import {
    //   VARIABLE_DATA,
    //   PRODUCER_ALIAS,
    //   PRODUCER_NAME,
    //   STATE_PROVINCE_COUNTRY,
    // } from './data.js'


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        // const VARIABLE_DATA: VARIABLE_DATA = {
        //     CONTRACT_DATE: 'Jan 16, 2022',
        //     CUSTOMER_ALIAS: `Ramon Ayala`,
        //     PRODUCT_TITLE: 'Pepas Type Beat | Guaracha',
        //     PRODUCT_PRICE: '120.00',
        //     PRODUCT_PRICE_WORD: 'One Hundred and Twenty Dollars and 0/100',
        // }
        // const PRODUCER: PRODUCER = {
        //     PRODUCER_ALIAS: 'Qba Mc',
        //     PRODUCER_NAME: 'Wilfred Lopez',
        //     STATE_PROVINCE_COUNTRY: 'New Jersey',
        // }

        //TODO:
        //CHECK EMPTY

        update(variables, producerVars)
    }

    function update(
        VARIABLE_DATA: VARIABLE_DATA,
        PRODUCER: PRODUCER
    ) {


        const { PRODUCER_ALIAS, PRODUCER_NAME, STATE_PROVINCE_COUNTRY } = PRODUCER
        const {
            CONTRACT_DATE,
            CUSTOMER_ALIAS,
            PRODUCT_TITLE,
            PRODUCT_PRICE,
            PRODUCT_PRICE_WORD,
        } = VARIABLE_DATA
        const PUBLISHING_RIGHTS = `5. Publishing Rights: With respect to the publishing rights and ownership of the underlying composition embodied in the Master, the Artist, and the Producer hereby acknowledge and agree that the underlying composition shall be owned/split between them as follows: - ${CUSTOMER_ALIAS}, owns 50% of publishing rights. - ${PRODUCER_NAME}, owns 50% of publishing rights.`

        //   const SAMPLES_DEFINITION = `a. Producer warrants and represents that he has the full right and ability to enter into this agreement, and is not under any disability, restriction, or prohibition with respect to the grant of rights hereunder. Producer warrants that the manufacture, sale, distribution, or other exploitation of the Masters hereunder will not infringe upon or violate any common law or statutory right of any person, firm, or corporation; including, without limitation, contractual rights, copyrights, and right(s) of privacy and publicity and will not constitute libel and/or slander. Artist warrants and represents that he has the full right and ability to enter into this agreement, and is not under any disability, restriction, or prohibition with respect to the grant of rights hereunder. Artist warrants that the manufacture, sale, distribution, or other exploitation of the Masters hereunder will not infringe upon or violate any common law or statutory right of any person, firm, or corporation; including, without limitation, contractual rights, copyrights, and right(s) of privacy and publicity and will not constitute libel and/or slander. The foregoing notwithstanding, Producer undertakes no responsibility whatsoever as to any elements added to the Masters by Artist, and Artist indemnifies and holds Producer harmless for any such elements. Producer warrants that he shall not "sample" (as that term is commonly understood in the recording industry) any copyrighted material or sound recordings belonging to any other person, firm, or corporation (hereinafter referred to as "Owner") without first having notified Artist and obtaining Artist's consent. Artist shall have no obligation to approve the use thereof; however, if approved, any payment in connection therewith, including any associated legal clearance costs, shall constitute an additional recording cost and expense and shall be borne by Artist. Knowledge by Artist that "samples" were used by Producer, which was not affirmatively disclosed by Producer to Artist, shall shift, in whole or in part, the liability for infringement or violation of the rights of any third party arising from the use of any such "sample" from Producer to Artist. At Artist's request, Producer shall cooperate with respect to any matters concerning "sampling" which may arise hereunder. The parties acknowledge that Producer did not incorporate any "samples" in the Master hereunder.`



        function replaceAll(
            keyValueArr = [{ key: '', value: '' }],
            text = RAW__TEXT
        ) {
            for (const { key, value } of keyValueArr) {
                const regex = new RegExp(key, 'gi')
                if (typeof String.prototype['replaceAll'] === 'function') {
                    //@ts-ignore
                    text = text.replaceAll(regex, value)
                } else {
                    while (text.includes(key)) {
                        text = text.replace(regex, value)
                    }
                }
            }
            return text
        }

        const text = replaceAll([
            {
                key: '{CONTRACT_DATE}',
                value: CONTRACT_DATE + '\n',
            },
            {
                key: '{CUSTOMER_ALIAS}',
                value: CUSTOMER_ALIAS,
            },
            {
                key: '{PRODUCER_ALIAS}',
                value: PRODUCER_ALIAS,
            },
            {
                key: '{TRACK_TITLE}',
                value: PRODUCT_TITLE,
            },
            {
                key: '{TRACK_PRICE_WORD}',
                value: PRODUCT_PRICE_WORD,
            },
            {
                key: '{TRACK_PRICE}',
                value: PRODUCT_PRICE,
            },
            {
                key: '{PRODUCER_ALIAS}',
                value: PRODUCER_ALIAS,
            },
            {
                key: '{PUBLISHING_RIGHTS}',
                value: PUBLISHING_RIGHTS,
            },
            {
                key: '{STATE_PROVINCE_COUNTRY}',

                value: STATE_PROVINCE_COUNTRY,
            },
        ])

        const rootDiv = document.getElementById('root')

        rootDiv.innerHTML = `<div>${text}</div>`
    }

    function handleVariablesChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target as { id: keyof VARIABLE_DATA, value: string }
        setVariables((current) => ({ ...current, [id]: value }))
    }
    function handleProducerChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target as { id: keyof PRODUCER, value: string }
        setProducerVars((current) => ({ ...current, [id]: value }))
    }

    return (
        <div>
            {st}

            <div className="container">
                <h1 className="text-center">Exclusive Licence Contract</h1>
                <form className="d-flex flex-column align-items-center" id="form" onSubmit={handleSubmit}>

                    <div className="form-control">

                        <label className="label" htmlFor="CONTRACT_DATE">
                            CONTRACT_DATE
                </label>
                        <input
                            value={variables.CONTRACT_DATE}
                            onChange={handleVariablesChange}
                            className="input" type="text" id="CONTRACT_DATE" />
                    </div>
                    <div className="form-control">

                        <label className="label" htmlFor="CUSTOMER_ALIAS">
                            CUSTOMER_ALIAS
                </label>
                        <input
                            onChange={handleVariablesChange}
                            value={variables.CUSTOMER_ALIAS}
                            className="input" type="text" id="CUSTOMER_ALIAS" />
                    </div>
                    <div className="form-control">

                        <label className="label" htmlFor="PRODUCT_TITLE">
                            PRODUCT_TITLE
                </label>
                        <input
                            value={variables.PRODUCT_TITLE}
                            onChange={handleVariablesChange}
                            className="input" type="text" id="PRODUCT_TITLE" />
                    </div>

                    <div className="form-control">

                        <label className="label" htmlFor="PRODUCT_PRICE">
                            PRODUCT_PRICE
                </label>
                        <input
                            value={variables.PRODUCT_PRICE}
                            onChange={handleVariablesChange}
                            className="input" type="text" id="PRODUCT_PRICE" />
                    </div>
                    <div className="form-control">

                        <label className="label" htmlFor="PRODUCT_PRICE_WORD">
                            PRODUCT_PRICE_WORD
                </label>
                        <input
                            value={variables.PRODUCT_PRICE_WORD}
                            onChange={handleVariablesChange}
                            className="input" type="text" id="PRODUCT_PRICE_WORD" />
                    </div>
                    <div className="form-control">

                        <label className="label" htmlFor="PRODUCER_ALIAS">
                            PRODUCER_ALIAS
                </label>
                        <input
                            value={producerVars.PRODUCER_ALIAS}
                            onChange={handleProducerChange}
                            className="input" type="text" id="PRODUCER_ALIAS" />
                    </div>
                    <div className="form-control">

                        <label className="label" htmlFor="PRODUCER_NAME">
                            PRODUCER_NAME
                </label>
                        <input
                            value={producerVars.PRODUCER_NAME}
                            onChange={handleProducerChange}
                            className="input" type="text" id="PRODUCER_NAME" />
                    </div>
                    <div className="form-control">

                        <label className="label" htmlFor="STATE_PROVINCE_COUNTRY">
                            STATE_PROVINCE_COUNTRY
                </label>
                        <input
                            value={producerVars.STATE_PROVINCE_COUNTRY}
                            onChange={handleProducerChange}
                            className="input" type="text" id="STATE_PROVINCE_COUNTRY" />
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary" type="submit">UPDATE</button>
                    </div>
                </form>
                <div>
                    <p>
                        *INFO

            </p>
                    <p>Fill the form and click update. then copy the values showing bellow</p>
                </div>
            </div>
            <hr />
            <hr />
            <div id="root"></div>
            <hr />
            <hr />


        </div>
    )
}

export default Contract