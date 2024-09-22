import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import video1 from '../assets/lesbian.mp4';
import video2 from '../assets/gay.mp4';
import video3 from '../assets/bisexual.mp4';
import video4 from '../assets/transgender.mp4';

const Homepage = () => {
	const videoArr = [
		{
			videosrc: video1,
		},
		{
			videosrc: video2,
		},
		{
			videosrc: video3,
		},
		{
			videosrc: video4,
		},
	];

	const container = useRef(null);
	const videoRef = useRef([]);

	const timeline = gsap.timeline({
		ease: 'power3.out',
	});

	useGSAP(
		() => {
			timeline
				.fromTo(
					'.text',
					{
						opacity: 0,
						scale: 0,
					},
					{
						opacity: 1,
						scale: 1,
						duration: 2,
						ease: 'power3.out',
					},
					'a1'
				)
				.fromTo(
					'.home-landing',
					{
						y: 0,
					},
					{
						y: '100vh',
						duration: 2,
						ease: 'power3.out',
					},
					'a2'
				)
				.to(
					'.home-landing-bg',
					{
						display: 'block',
						y: '100vh',
						duration: 2,
						delay: 0.5,
					},
					'a2'
				)
				.to('.home-landing', {
					display: 'none',
				})
				.to('.home-landing-bg', {
					display: 'none',
				})
				.to('.home-options', {
					x: 0,
					duration: 2,
					ease: 'power3.out',
					delay: -1.5,
				})
				.fromTo(
					'#video',
					{
						scale: 0,
					},
					{
						scale: 1,
						ease: 'power3.out',
						duration: 2,
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
		},
		{ scope: container }
	);

	const onValueChange = (event) => {
		var value = document.getElementById('options').value;
		for (var i = 0; i < videoArr.length; i++) {
			if (i != value) {
				videoRef.current[i].pause();
			} else {
				videoRef.current[i].play();
			}
		}
	};

	useEffect(() => {
		// console.log(videoIndex);
		videoRef.current[0].play();
	}, []);
	useEffect(() => {
		// videoRef.current[videoIndex].play();
	}, []);

	return (
		<section ref={container}>
			<div className='home-landing flex'>
				<h1 className='text'>Welcome to the world of LGBTQ</h1>
			</div>
			<div className='home-landing-bg'></div>
			<div className='home-options flex-col'>
				<h1>Choose Options</h1>
				<select id='options' onChange={onValueChange}>
					<option value={0}>Lesbian</option>
					<option value={1}>Gay</option>
					<option value={2}>Bi-Sexual</option>
					<option value={3}>Transgender</option>
				</select>
				<div className='home-videos flex'>
					{videoArr.map((video, i) => (
						<video
							key={i}
							id='video'
							playsInline={true}
							preload='auto'
							muted
							loop
							ref={(ele) => (videoRef.current[i] = ele)}
						>
							<source src={video.videosrc} />
						</video>
					))}
				</div>
				<button className='button'>Enter</button>
			</div>
		</section>
	);
};

export default Homepage;
