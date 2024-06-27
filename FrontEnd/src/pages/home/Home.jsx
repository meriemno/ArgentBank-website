import React from "react"
import Footer from "../../layouts/footer/Footer"
import Header from "../../layouts/header/Header"
import Hero from "../../composants/hero/Hero"
import Features from "../../composants/features/Features"
import iconChat from "../../images/icon-chat.webp"
import iconMoney from "../../images/icon-money.webp"
import iconSecurity from "../../images/icon-security.webp"

function Home() {

    return (
        <>
            <Header />

            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Features imgSrc={iconChat}
                    title="You are our #1 priority"
                    text=" Need to talk to a representative? You can get in touch through our
                       24/7 chat or through a phone call in less than 5 minutes."/>
                <Features imgSrc={iconMoney}
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!" />
                <Features imgSrc={iconSecurity}
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money
                       is always safe."/>
            </section>
            <Footer />
        </>
    )
}

export default Home