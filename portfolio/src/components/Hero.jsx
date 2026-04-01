function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-tag">Hello....</p>
          <h1>I'M YARLAGADDA JANAKI</h1>
          <h3>Passionate Programmer + Aspiring FrontEnd Developer</h3>
          <p className="hero-description">
            I am a B.Tech student specializing in Artificial Intelligence and
            Machine Learning with strong interest in web development. I enjoy
            building practical and user-friendly applications that solve
            real-world problems with simple and efficient solutions.
          </p>
        </div>
        <div className="hero-right">
          <div className="profile-ring">
            <img
              src="/profile.png"
              alt="Janaki profile"
              className="profile-image"
              width={320}
              height={320}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;