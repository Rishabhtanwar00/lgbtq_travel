import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import video1 from '../assets/lesbian.mp4';
import video2 from '../assets/gay.mp4';
import video3 from '../assets/bisexual.mp4';
import video4 from '../assets/transgender.mp4';
import LandingImg from '../assets/landing.png';

const Homepage = () => {
	const videoArr = [
		{
			videosrc: video1,
			value: 0,
			title: 'Lesbian',
		},
		{
			videosrc: video2,
			value: 1,
			title: 'Gay',
		},
		{
			videosrc: video3,
			value: 2,
			title: 'Bi-Sexual',
		},
		{
			videosrc: video4,
			value: 3,
			title: 'Transgender',
		},
	];

	const [selectedVideo, setSelectedVideo] = useState(null);
	const container = useRef(null);
	const videoRef = useRef([]);

	const timeline = gsap.timeline({
		ease: 'power3.out',
		scrub: 2,
		delay: 0.5,
	});

	const timeline2 = gsap.timeline({
		ease: 'power3.out',
		scrub: 2,
		delay: 10,
	});
	useGSAP(() => {
		timeline
			.to('.home-landing', {
				x: '0',
				duration: 1.3,
				ease: 'power3.out',
			})
			.to('.home-landing', {
				background: '#000',
			})
			.to('.landing-img', {
				bottom: 0,
				duration: 1,
				ease: 'power3.out',
			})
			.to(
				'.text-span',
				{
					opacity: 1,
					duration: 1,
					stagger: 0.1,
					ease: 'power3.out',
				},
				'a1'
			)
			.to(
				'.text-span',
				{
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: 'power3.out',
				},
				'a1'
			);
		setTimeout(() => {
			timeline.reverse();
		}, 6000);
		timeline2
			.to('.home-options h1', {
				opacity: 1,
				duration: 1,
				ease: 'power3.out',
				delay: 0.5,
			})
			.fromTo(
				'.video-container',
				{
					scale: 0,
				},
				{
					scale: 1,
					ease: 'power3.out',
					duration: 1.5,
					stagger: 0.3,
				},
				'a4'
			)
			.fromTo(
				'.button',
				{
					opacity: 0,
				},
				{
					opacity: 1,
					ease: 'power3.out',
					duration: 1,
				},
				'a4'
			);
	});

	const handleRadioChange = (index) => {
		setSelectedVideo(index); // Set the selected video index

		// Pause all videos
		videoRef.current.forEach((video, i) => {
			if (video && i !== index) {
				video.pause();
			}
		});

		// Play the selected video
		if (videoRef.current[index]) {
			videoRef.current[index].play();
		}
	};

	const handleMouseEnter = (index) => {
		if (videoRef.current[index]) {
			videoRef.current[index].play();
		}
	};

	const handleMouseLeave = (index) => {
		if (videoRef.current[index] && selectedVideo !== index) {
			videoRef.current[index].pause();
		}
	};

	return (
		<section ref={container}>
			<div className='home-landing flex'>
				<h1 className='text'>
					<span className='text-span'>Welcome</span>
					<span className='text-span'> to</span>
					<span className='text-span'> the</span>
					<span className='text-span'> world</span>
					<span className='text-span'> of</span>
					<span className='text-span'> LGBTQ</span>
				</h1>
				<img className='landing-img' src={LandingImg} alt='' />
			</div>
			<div className='home-options flex-col'>
				<h1>Choose Options</h1>

				<div className='home-videos flex'>
					{videoArr.map((video, i) => (
						<label className='video-container' 
						key={i}>
							<input
								type='radio'
								name='test'
								value={video.value}
								checked={selectedVideo === i}
								onChange={() => handleRadioChange(i)}
							/>
							<video
								id='video'
								playsInline={true}
								preload='auto'
								muted
								loop
								ref={(ele) => (videoRef.current[i] = ele)}
								onMouseEnter={() => handleMouseEnter(i)}
								onMouseLeave={() => handleMouseLeave(i)}
							>
								<source src={video.videosrc} />
							</video>
							<div className='video-text'>
								<h1>{video.title}</h1>
							</div>
						</label>
					))}
				</div>
				<button className='button'>Enter</button>
			</div>
		</section>
	);
};

export default Homepage;
