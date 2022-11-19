<template>
  <PageHeader title="Disclaimer" />
  <PageSection title="Interpretation and Definitions">
    <p>
      <h3 class="text-lg font-bold mb-4">Interpretation</h3>
      The words of which the initial letter is capitalized have meanings defined under the following conditions.
      The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
    </p>

    <p>
      <h3 class="text-lg font-bold mb-4">Definitions</h3>
      For the purposes of this Disclaimer:
      <ul>
        <li class="indent-2"><span class="font-bold">Company</span> (referred to as either “the Company”, “We”, “Us” or “Our” in this Disclaimer) refers to BikeTourNB.</li>
        <li class="indent-2"><span class="font-bold">Service</span> refers to the Website.</li>
        <li class="indent-2"><span class="font-bold">You</span> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        <li class="indent-2"><span class="font-bold">Website</span> refers to BikeTourNB, accessible from <NuxtLink class="text-red hover:underline" to="/">https://biketournb.ca</NuxtLink></li>
      </ul>
    </p>
  </PageSection>
  <PageSection title="Disclaimer">
    <p>
      The information contained on the Service is for general information purposes only.<br />
      The Company assumes no responsibility for errors or omissions in the contents of the Service.<br />
      In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.<br />
      The Company does not warrant that the Service is free of viruses or other harmful components.
    </p>
  </PageSection>
  <PageSection title="External Links Disclaimer">
    <p>
      The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.<br />
      Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
    </p>
  </PageSection>
  <PageSection title="Errors and Omissions Disclaimer">
    <p>
      The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.<br />
      The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
    </p>
  </PageSection>
  <PageSection title="Fair Use Disclaimer">
    <p>
      The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.<br />
      The Company believes this constitutes a “fair use” of any such copyrighted material as provided for in section 107 of the United States Copyright law.<br />
      If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
    </p>
  </PageSection>
  <PageSection title="Views Expressed Disclaimer">
    <p>
      The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.<br />
      Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.
    </p>
  </PageSection>
  <PageSection title="No Responsibility Disclaimer">
    <p>
      The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.<br />
      In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
    </p>
  </PageSection>
  <PageSection title="“Use at Your Own Risk” Disclaimer">
      All information in the Service is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.<br />
      The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
  </PageSection>
  <PageSection title="Contact Us">
    If you have any questions about this Disclaimer, You can contact Us:<br />
    By using the <NuxtLink class="text-red hover:underline" to="/contact">Contact form</NuxtLink> on our website.
  </PageSection>
  
  <p class="container mx-auto px-4">Last updated: May 04, 2021</p>
</template>

<script setup>
  const route = useRoute()
  console.log(route.href)
</script>