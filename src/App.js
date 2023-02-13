import './App.css';
import styled from "styled-components";


const AppContainer = styled.div`
  background-image: url("pattern-background-mobile.svg");
  background-size: cover;
  background-repeat: no-repeat;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-repeat: no-repeat;
  //background-position: left;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  
  
  
@media (min-width: 800px) {
  background-image: url("pattern-background-desktop.svg");
  background-size: contain;
}
`

const SummaryContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
  width: 90%;
  max-width: 450px;
  min-height: 567px;
  max-height: 700px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 340px) {
    width: 95%;
    scale: 0.9;
  }
`

const HeroImage = styled.div`
  background-image: url("illustration-hero.svg");
  aspect-ratio: 450/220;
  background-repeat: no-repeat;
  background-size: cover;
  height: 28.2%;
  min-height: 160px;
  width: 100%;
  border-radius: 20px 20px 0 0;
`

const Title = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 0;
  padding: 0;

  font-family: 'Red Hat Display',sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 29px;
  text-align: center;

  color: #1F2E55;
  
  @media (min-width: 800px) {
    margin-top: 3rem;
  }
`

const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 0;
  padding: 0 2rem;

  font-family: 'Red Hat Display',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-align: center;

  color: #717FA6;

  @media (min-width: 800px) {
    padding: 0 3rem;
  }
`

const Plan = styled.div`
  //max-width: 90%;
  //min-width: 70%;
  width: calc(100% - 3rem);
  height: 81px;
  border-radius: 20px;
  background-color: #F7F9FF;
  //margin-right: 1.5rem;
  //margin-left: 1.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  
  display: flex;
  
  align-items: center;
  justify-content: space-between;
`

const Circle = styled.div`
  height: 48px;
  width: 48px;
  background-color: #DFE6FB;
  border-radius: 50%;

`

const PlanInfo = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PlanTitle = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
`

const PlanPrice = styled.p`
  margin: 0;
  padding: 0;
`

const ChangePlanLink = styled.a`
  // underline is behaving strange here
    text-decoration: underline;
  //border-bottom: 2px solid #382AE1 ;
  color: #382AE1;
  font-family: 'Red Hat Display' ,sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  margin: 0;
  padding: 0;

  text-decoration-skip-ink: none;
  cursor: pointer;
  
  :hover {
    text-decoration: none;
  }
  
  
  
`

const PaymentButton = styled.button`
    background-color: #382AE1;
    color: white;
    width: calc(100% - 3rem);
  height: 50px;
  border-radius: 11px;
  margin-top: 1.5rem;
  box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
  cursor: pointer;
  
  :hover {
    background-color: #766CF1
  }

  @media (min-width: 800px) {
    margin-top: 2rem;
  }
`

const CancelOrder = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  font-family: 'Red Hat Display',sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height */
  color: #717FA6;
  
  :hover {
    color: black;
  }
  
  @media (min-width: 800px) {
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
  

`



function App() {
  return (
    <AppContainer>
        <SummaryContainer>
            <HeroImage />
            <Title>Order Summary</Title>
            <Description>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Description>
            <Plan>
                <Circle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fillRule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
                </Circle>

                <PlanInfo>
                    <PlanTitle>Annual Plan</PlanTitle>
                    <PlanPrice>$59.99/year</PlanPrice>
                </PlanInfo>
                <ChangePlanLink>Change</ChangePlanLink>
            </Plan>
            <PaymentButton>Proceed to Payment</PaymentButton>
<CancelOrder>Cancel Order</CancelOrder>
        </SummaryContainer>

    </AppContainer>
  );
}

export default App;
