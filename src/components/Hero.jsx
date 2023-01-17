
import styled from "styled-components";

const HeroWrapper = styled.section`

    margin: 0;
    padding: 0;
    z-index: 10;

    box-sizing: border-box;

    width: 100%;
    height: 100vh;
   
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    color: white;
   

    .intro {
        width: 20%;
        height: 70%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        h1 {
            text-align: center;
            font-size: 35px;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif ;
        }

        .picture {
            width: 300px;
            height: 300px;
            border: 2px solid white;
            border-radius: 50%;
        }
    }

    .code {
        width: 55%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h5 {
            margin: 5px;
            font-size: 20px;
        }
    }

`


const Hero = () => {

    return (
        <HeroWrapper>
            <div className = "code">
                
                <h5> {`val Manuel: AndroidDeveloper = AndroidDeveloper.Builder().apply {`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {`name = "Manuel Alejandro Rodriguez Martín"`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {`age = 24`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {` addTecs(`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {`  listOf(`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {` Kotlin(), AndroidStudio(), GitAndGitHub(), JetpackCompose()`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {`)`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;{` ) // See full list...`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp; {`addSoftSkills(`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;{`listOf(Communication(), Teamwork(), ProblemSolving(), Creativity(),`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {` ContinuousLearning()`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {`)`} </h5>
                <h5> &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; {`)`} </h5>
                <h5> {`}.build()`} </h5>
                <h5> {`Manuel.introduceYourself()`} </h5>

            </div>
            <div className = "intro">
                <div>
                    <h1>Manuel Rodríguez Martín</h1>
                </div>
                <div className = "picture">
                </div>
            </div>
        </HeroWrapper>
    )
}

export default Hero
