import React from "react";
import "./HomeSections.css";
import ShopCards from '../../assets/images/Shop_cards.jpg';
import InspirationCard from "../InspirationCard";
import DiscoverCard from "../DiscoverCard";
import QuestionCard from "../QuestionCard";

const Home_Sections = () => {
  return (
    <div className="home_sections">
        <div className="inspiration_title"><h1>Inspiration for your next trip</h1></div>
        <div className="inspiration_cards">
            <InspirationCard 
            src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWk3LLPUl-7Y7miasIqkJvWvXvqeIIiAnyd~NxoJetZNBGs-o98X5MK8lgz-OoI2RDIavqvhzjh-8EvKsO9TkF9Cmp-rhF8L5Z15flgsM~bW~LpE~XCfbQnYblrvgUFsjNTnkIn6oKLzeNBb~kdMQIR1lyI-K2VAkY2LBKKKOkH1qjpNFeLEZOfMlyaxoCtwsGmkx1s4wCK56HylxJOqpzkBFkis0SEr1wn0ytZDZc1QnA771-kCS2ddpusYePiM-N869NJd2Bzz8073UdqfcI4qUUcWsL8lIkCqn3WwYYaoxnnUi7KHCZ9j6418Rr3hU9Fq2T8-ZMal7pC0I5SAcA__"
            title="Sandton City Hotel"
            distance="53 km away"
            />
             <InspirationCard 
            src="https://s3-alpha-sig.figma.com/img/d1d5/8d1e/618cfa54b385b8498f4a61ba36fac91b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJYANpJA~7xEGEVmxZl3GwlyeWwz28xvAzb2CtnF0Zu0Z7JMxcqCxNEnMBnhnsu9dLppv07UYJcQE~GiLiBr2wr~5G8CRt0ZXrxnffxJR39HS7A8bCpRHIBiImPVIzA5lKieut9OyZp6AXCFhvLhvmlL4Cj4q1ohtrAy68AENvF-QKR4E-8dn9mj97uO2ye9WJizN0WXKJ1kS4vZU7YLOhHerScKyzF6JUXdSSiKm3ZMVQmSpt0DYBVe86YIexPiLePwrtON5XkdYizacyCYb2v3lG72UCbB6-wQBaWy47NNhBwybQK8SgGuBDIaeYFq237rP4LfRyAVooAdY3IaqQ__"
            title="Joburg City Hotel"
            distance="168 km away"
            />
             <InspirationCard 
            src="https://s3-alpha-sig.figma.com/img/9710/36bd/867b0c3b96f2536c3194012f4a8e6a35?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8fp1zkCriUAOm4Y1VOR5udz0laeYj9U2uuYd4bbxgsuTlzm4ko5Q9RPSGNw5KYICGG16jCXWzf0nzrApwCR1gLpUdaFVZNqKGhDQYAGHO70MQWGzg5RsRLwCsuDKYFIYfzcdc82svCSkVuiVeXYRDrALCwQrA4TwnZS2supZUOPVZJ1nx1sFaV0qkA5dt3791FJjXSSOGQQwGXTbLUkPkE~U~hguvswa6Vfp1hdauUBxhVg-7NI9PlekW197E~gAvHy50I1PvjdZlNSxGsl6hTzuVyB49O86gh9URvjzY6931RYYSJF9ubT0rUx-CcjLaCZmYzxhEHRxjgkcOdeRw__"
            title="Woodmead Hotel"
            distance="30 km away"
            />
             <InspirationCard 
            src="https://s3-alpha-sig.figma.com/img/0e73/8a88/3f20a6ea5306e1bc71f44938a7c19e9b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC9vMufjfEJ-ucTsRsNXvoo1~~lK03TSVQgjj7CwbpFhyeyMhzVdmt7ghqQJl6HCt73OBmT5eiq7JNiTA7zGG3~A2NrSHOSYEHEHDIWhOtcicRAJPyDR18zeGUAzficmC0o-XVTfvT3VYhGbAA8vA~bIx59yr4s5onJKjmSnHRx2ikek3GDO2nFOQT~Ib3eZSL5XXfetmXEccIv8k1swjmQGUYbLxBOXjdTjK5OSpvOIGGtxjCyhU9QtQrF2dAcAByC2n4Laib1g6UeNK89LVSWQAjBJqSy1rbq9jxoWI2b~Jretm~LYm3xSxT8qlKgOZ2AjEVNCtFNwZdYdpbYKCw__"
            title="Hyde Park Hotel"
            distance="34 km away"
            />
        </div>

        <div className="discover_title"><h1>Discover Airbnb Experiences</h1></div> 
        <div className="discover_cards">
            <DiscoverCard
            src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJY0Xb0SIsr~73To2gjzWVcdsreUT9pUVBDX9CD9vfNRGwVpJeFKHfaKcxi95E5dDwXrH7ZzKH-NLnZGmirMdIVUjIaFbjvMEvKaI90FD-KSu4VaCaSGuObpGkbrYXH6Xa7oxNlniDUWp9Zjj5u6nobnwnzB2bZ8OSwhY9wRsCXVxsNmyvvWuKShA6viPp4gZPrp0xZLWlzv76mZVgHYTPU2H0-~qDZYdMFiX3Jy46uvhuRmjKuNEq8lg14s7z1mFO8gXtQ6jvdEWaM5lu69QZXVmq8ylOEHpPjt0pExiMfQ~MHAN15JSsSdRoPpQy0iCJcYTuZDvTvu3od1qSAYNA__"
            title="Things to do on your trip"
            text="Experiences"
            />
             <DiscoverCard 
            src="https://s3-alpha-sig.figma.com/img/7894/1428/a63173a16c7efe522cab3d32fa5975ee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K641GITi9uL5l37i8Tjzpxmj62t-GnhFgRShu7FR5dJBoQ5eyKy5xJBn2WMcmbkO7F2lsVee5IXl22rQ4DTt-a5pM1UtG3DBaQivOGN21jzK2tRkFgmWOc1ErUu-k9G0POR-GOjW1J6kfsEQ4PrIYUcBUP8PiEz5bszK5cItTbIjHi5CSvhvTdritLLFKMElKMbDxctRwNfCdmxkcnKR0djZzdm2BH-ukLhyA9FwrazgggYeMnhScB3EY7O0U35B27sbr-9~liFTJuM2IcEjwj-4Pz4x2ovU7VE3WH7trtxh~O1GSIcs9urV38vvJE6SjQ87M7P8-rOhgN3xTJHiiQ__"
            title="Things to do from home"
            text="Online Experiences"
            />
        </div>
        
        <div className="shop">
            <div className="gift_cards">
                <h1>Shop Airbnb gift cards</h1>
                <button>Learn more</button>
            </div>
            <div className="shop_cards">
            <img src={ShopCards} alt="gift cards" />
            </div>
        </div>
      
        <div className="question_cards">
            <QuestionCard
            src="https://s3-alpha-sig.figma.com/img/5ed8/a779/efd4d7b308f8c6bdd6b801b638cc68d2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAx6VDrtykZ67SzSdsLIfP8BbeOSWckqNWEhOb5QK31qhVtfu39OrCEU7x8jYNENw9HIGLCFoV0e4Hbqj5uyV54STudmj997Px8Bm2zdZBvQZsrcZBjDdNhUqtiXCNSeXu7fDGAiDCHt0SUZF3RxeHbhJnlRcLct2PngCFZ66A~8GhmDM9TMfmCy8Nprj4sOW6aAVNoK6UcTmNWJ~oe-e5JaShuE~fazKOiUG6Nx7mVSP-lB3CwwMTzyR2ZGwY2ZRfE2x-aMfsrH~oJKvkxDiwTcwmQUrpgIEWw2zGU60LMBascGCaJxjW3rZzuqJaLO1G3d8cScM0-xS9y2VQo2Cg__"
            title="Questions about hosting?"
            text="Ask a Superhost"
            />
        </div>
    </div>
  )
}

export default Home_Sections;
