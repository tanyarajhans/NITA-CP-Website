import React from "react";
import Navbar from "../components/Navbar";
import Resourcecard from "../components/Resourcecard";

function resources() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="flex flex-wrap justify-around">
        
        <Resourcecard
          Image="data:image/jpeg;base64,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"
          name="STL"
          author="Common Lounger"
          difficulty="Intermediate"
          link="https://www.commonlounge.com/discussion/b7d5d197ea274a0f83eee5c1c9d17e8c"
        />
        <Resourcecard
          Image="https://drive.google.com/file/d/1Di6klTbQPWoHhT4HDS-QzOStNPEQQLh9/view?usp=sharing"
          name="Java"
          author="Saurabh Shukla"
          difficulty="Beginner"
          link="https://www.youtube.com/playlist?list=PLX9Zi6XTqOKQ7TdRz0QynGIKuMV9Q2H8E"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="Arrays and Vectors"
          author="CodeChef"
          link="https://www.youtube.com/watch?v=E2nXEuOkG48&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E"
          difficulty="Beginner"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="Searching and Sorting"
          author="CodeChef"
          link="http://www.google.com"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=QkHYa_EImFg&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=3"
          name="Binary Search"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=v1Taekeil0g&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=18"
          name="Linked List I"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=nUMSFzTHykA&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=19"
          name="Linked List II"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=cGf_3SgXwWk&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=4"
          name="Stacks"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=ddIWsXj7kVk&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=6"
          name="Heaps & Priority Queues"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=NBipEF08gUo&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=7"
          name="Recursion and Backtracking I"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=exyxf_ihbhI&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=8"
          name="Recursion and Backtracking II"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=F1Fye5cXA0g&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=20"
          name="Trees I"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=iw44T1jDDQE&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=21"
          name="Trees II"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=l_g3aH8WAVI&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=23"
          name="Trees III"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=JHldgHi6DPM&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=9"
          name="Dynamic Programming I"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=5-lL9QuTpRA&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=10"
          name="Dynamic Programming II"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=S50Eci-SuBE&list=PL2q4fbVm1Ik7W76Tv1BBMGvXazyzZ7UYd"
          name="Dynamic Programming on Trees"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=w1t_ZDwLPwg&list=PLQXZIFwMtjowKrFlzGcjMqchffJDRsz1E&index=12"
          name="Greedy Algorithms"
          author="CodeChef"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=YTtpfjGlH2M&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw"
          name="Graph"
          author="Striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=1mhRZPYCkAY&list=PL2q4fbVm1Ik4JdzE2Bv_UUGBz0TXEIrai"
          name="Disjoint Set"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=thsleiL6zxg"
          name="Tries I"
          author="Striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=vAF8Wvs10Ts"
          name="Tries II"
          author="Striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=nWwt7w2s1So&list=PL2q4fbVm1Ik6v2-emg_JGcC9v2v2YTbvq"
          name="Segment Tree"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=eRkqvQtm4DU&list=PL2q4fbVm1Ik4liHX78IRslXzUr8z5QxsG"
          name="Number Theory"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=8CryoVUNs_o&list=PL2q4fbVm1Ik48tGHU2eJxQdnGls2QPCBl"
          name="Combinatorics"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=efL86JCONH0&list=PL2q4fbVm1Ik7ip1VkWwe5U_CEb93vw6Iu"
          name="Bit Manipulation"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=FGeSdYqM3Nk&list=PL2q4fbVm1Ik6ThrYKCzgEpmaS_XWDGHjx"
          name="String Algorithms"
          author="CodeNCode"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          link="https://www.youtube.com/watch?v=qE6ceKCpbj0&list=PL2q4fbVm1Ik7OAGWIMYrgRkKqshRBpJoY"
          name="Geometric Algorithms"
          author="CodeNCode"
          difficulty="Intermediate"
        />
      </div>
    </div>
  );
}

export default resources;
