import emailLight from "/src/assets/email-light.png"
import emailDark from "/src/assets/email-dark.png"
import locationLight from "/src/assets/location-light.png"
import locationDark from "/src/assets/location-dark.png"
import phoneLight from "/src/assets/phone-light.png"
import phoneDark from "/src/assets/phone-dark.png"

import useMail from "/src/hooks/useMail"

export default function ContactData({ mode }) {
  let {handleMail} = useMail()

  return (
    <section className="data">
      <img src={mode === 'light' ? emailLight : emailDark} alt="email" />
      <p onClick={handleMail}>tomashojnadel@gmail.com</p>
    
      <img src={mode === 'light' ? phoneLight : phoneDark} alt="teléfono" />
      <a href="https://api.whatsapp.com/send?phone=5493541317326" target="_blank">+54 9 3541-317326</a>
    
      <img src={mode === 'light' ? locationLight : locationDark} alt="ubicación" />
      <a target="_blank" href="https://www.google.com.ar/maps/place/Villa+Carlos+Paz,+C%C3%B3rdoba/@-31.4121939,-64.5697769,12z/data=!3m1!4b1!4m6!3m5!1s0x942d6640d6777c71:0x75c24ab6cb121bed!8m2!3d-31.4207828!4d-64.4992141!16zL20vMGNoc3Bt">
        <p>Villa Carlos Paz, Córdoba, Argentina</p>
      </a>    
    </section>
  )
}