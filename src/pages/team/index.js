/*eslint-disable */
import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import styled, { css } from 'react-emotion'
import Card from '../../components/team/card.js'
import Layout from '../../layouts';
import Helmet from '../../components/helmet';


const container =css`
		display: flex;
		justify-content:center;
		align-items:center;
		position: relative;
		margin: 56px 0px 35px 0px;
		border-box:box-sizing;
		
`
const teamCards =css`
 		display:flex;
 		flex-wrap:wrap;
 		flex-direction:row;
 		justify-content:center;
 		align-items:center;
 		margin-top:60px;
 		margin-bottom:60px;
`
const bannerImage=css`
	flex-basis:1800px;
	height:auto;
	opacity:0.9;
	background-color:#ad3ccb;
`
const textbanner = css`
		display: flex;
		justify-content:center;
		align-items:center;
		position:absolute;
		color:#fff;
		font-size:30px;
		font-weight:bold;
		line-spacing:5px;
		line-height:10px;
		padding:30px;
		top:30%;
		@media (max-width:500px){
			font-size:16px;
		}
		@media (max-width:690px){
			top:20%;
		}
`
class TeamPage extends React.Component{
render(){
	const we= this.props.data.TeamImages.edges['0'].node.teamImages;
	const bannerImage = this.props.data.BannerImage.edges['0'].node.teamBanner;

	return(
		<Layout location={this.props.location}>
			<Helmet
	          title='Tech47 | team'
	          description='Tech47-team'
	          image={bannerImage.resolutions.src}
	          pathname={this.props.location.pathname}
	          absoluteUrl={true}
        	/>

			<div className={container}>
				<img src={pic01} className={bannerImage}/>
				<Fade left><p className={textbanner}>Our Team</p></Fade>
			</div >
			<div className={teamCards} >
			 { 
			 	we.map((team) => (<Card key={team.title}  
			 		description={team.description}
			 		pictureUrl={team.resolutions}
			 		fullName={team.title}/>))
			 }	
			</div>	
		</Layout>)
}

}

export const contentfulTeamQuery = graphql`
  query TeamQuery {
  TeamImages:allContentfulTeamImages{
   	edges{
      node{
        teamImages{
          title
          description
          resolutions(width:150, height: 150){
           ...GatsbyContentfulResolutions
          }
        }
      }
    }
  }
  BannerImage:allContentfulTeamBanner{
    edges{
      node{
        teamBanner{
        	resolutions(width:1800, height: 380){
           ...GatsbyContentfulResolutions
          }
        }
      }
    }
  }
}
`;

export default TeamPage;