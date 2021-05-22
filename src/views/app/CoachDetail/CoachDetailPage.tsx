import React, {useState, useRef} from 'react';
import { Container, CoacheDetailWrapper, CoacheDetailBoxLeft, CoacheDetailBoxRight, AboutWrapper, AboutText, VideoBox, VideoIcon, VideoModal, VideoText } from './CoachDetailPage.styled';
import { LabelHeading, CoachDetail, CoachShortProfile, CoachStatistics } from 'components';
import { data } from '../../../dummy';
import { images } from '../../../constants';

function CoachDetailPage({ props }: any): JSX.Element {
  const [visible, setVisible ] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function closeModal() {
    setVisible(false); 
    videoRef.current?.pause();
  }

  return (
    <Container>
      <CoacheDetailWrapper>
        <CoacheDetailBoxLeft>
          
        <CoachShortProfile
          pic={data[0].img}
          name={data[0].name}
          about={data[0].short}
          location={data[0].location}
          categories={data[0].categories}
          languages={data[0].languages}
        />

        <AboutWrapper>
          <LabelHeading isGreyed="true" title="About" />
        </AboutWrapper>
        <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris rhoncus, justo non elementum varius,
          metus nulla bibendum enim, ut euismod tellus.
        </AboutText>
                

        <CoachStatistics
          numooHours={data[0].numooHours}
          experience={data[0].experience}
          rating={data[0].rating}
          tags={data[0].tags}
        />


        <VideoBox onClick={() => setVisible(true)}>
          <VideoIcon src={images.VIDEO_ICON}></VideoIcon>
        </VideoBox>

        <VideoModal
          title={`Personal Message from ${data[0].name}`}
          centered
          visible={visible}
          onCancel={closeModal}
          footer={null}
          bodyStyle={{padding: '0px'}}
        >
          <video width="100%" height="100%" autoPlay={true} ref={videoRef} controls>
            <source src={data[0].video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </VideoModal>
        <VideoText>Can&apos;t watch? Click to read and get to know {data[0].name}</VideoText>


        </CoacheDetailBoxLeft>
        <CoacheDetailBoxRight>
          <CoachDetail />
        </CoacheDetailBoxRight>
      </CoacheDetailWrapper>

      
    </Container>
  )
}

export default CoachDetailPage;