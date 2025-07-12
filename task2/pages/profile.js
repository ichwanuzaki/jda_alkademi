import Layout from '../components/Layout'

export default function Profile() {
  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-8"></div>
            <div>
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="mb-4">
                I'm a passionate web developer with 5 years of experience building modern web applications.
                I specialize in JavaScript, React, and Next.js.
              </p>
              <p>
                When I'm not coding, I enjoy hiking, photography, and reading science fiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['JavaScript', 'React', 'Next.js', 'Node.js', 'HTML/CSS', 'Git'].map((skill) => (
                  <div key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium">Senior Web Developer</h3>
                  <p className="text-gray-600">Tech Corp (2020 - Present)</p>
                  <p className="mt-2">Lead developer for multiple client projects.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Web Developer</h3>
                  <p className="text-gray-600">Digital Solutions (2018 - 2020)</p>
                  <p className="mt-2">Developed and maintained company websites.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}