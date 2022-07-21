import { Container, Text, Heading, Box, Link } from "@chakra-ui/react";

const Section = ({ index, title, children, props }: any) => (
  <Box {...props}>
    <Text as="h2" fontWeight="bold" fontSize="xl">
      {index}. {title}
    </Text>
    <Box>{children}</Box>
  </Box>
);

const Paragraph = ({ children, ...props }: any) => (
  <Box my="4" {...props}>
    {children}
  </Box>
);

const TermsAndConditions = () => (
  <>
    <Container maxW="container.xl">
      <Heading size="xl" lineHeight="48px">
        Terms of use
      </Heading>
      <br />
      <br />
      <Section index="1" title="General">
        <Paragraph>
          These terms and conditions (&quot;Terms&quot;) govern the use of the Website
          (defined below) and the Services (defined below). These Terms also
          include any guidelines, announcements, additional terms, policies, and
          disclaimers made available or issued by us from time to time. These
          Terms constitute a binding and enforceable legal contract between Meta
          Staking Pool Limited, and its affiliates (
          <b>&quot;Company&quot;, &quot;Meta Pool&quot;, &quot;we&quot;, &quot;us&quot;</b>) and you, an end user of the
          services (<b>&quot;you&quot; or &quot;User&quot;</b>) at{" "}
          <Link href="https://metayield.app/" textDecor={"underline"}>
            https://metayield.app/
          </Link>{" "}
          (&quot;Services&quot;). By accessing, using or clicking on our website (and all:
          ; related subdomains) or its mobile applications (
          <b>&quot;Website&quot; or &quot;Platform&quot;</b>) or accessing, using or attempting to
          use the Services, you agree that you have read, understood, and to are
          bound by these Terms and that you comply with the requirements listed
          herein. If you do not agree to all of these Terms or comply with the
          requirements herein, please do not access or use the Website or the
          Services. In addition, when using some features of the Services, you
          may be subject to specific additional terms and conditions applicable
          to those features.
        </Paragraph>
        <Paragraph>
          We may modify, suspend or discontinue the Website or the Services at
          any time and without notifying you. We may also change, update, add or
          remove provisions of these Terms from time to time. Any and all
          modifications or changes to these Terms will become effective upon
          publication on our Website or release to Users. Therefore, your
          continued use of our Services is deemed your acceptance of the
          modified Terms and rules. If you do not agree to any changes to these
          Terms, please do not access or use the Website or the Services. We
          note that these Terms between you and us do not enumerate or cover all
          rights and obligations of each party, and do not guarantee full
          alignment with needs arising from future development. Therefore, our
          privacy policy, platform rules, guidelines and all other agreements
          entered into separately between you and us are deemed supplementary
          terms that are an integral part of these Terms and shall have the same
          legal effect. Your use of the Website or Services is deemed your
          acceptance of any supplementary terms too.
        </Paragraph>
        <Paragraph>
          This Website and the Services are not available to residents or
          citizens of Afghanistan, Angola, Azerbpaijian, Bahamas, Bosnia and
          Herzegovina, Botswana, Burundi, Cambodia, Cameroon, Canada, Chad,
          China, Crimea of Ukraine, Cuba, Democratic People&apos;s Republic of Korea,
          Democratic Republic of the Congo, Eritrea, Ethiopia, Ghana, Guinea,
          Guinea-Bissau, Haiti, Iran, Iraq, Japan, Laos, Libya, Madagascar,
          Mozambique, Nicaragua, Pakistan, Republic of Korea, Republic of the
          Congo, Russia, Serbia, Seychelles, Somalia, South Sudan, Sri Lanka,
          Stria, Sudan, Tajikistan, Trinidad and Tobago, Tunisia, Turkmenistan,
          Uganda, United States, Uzbekistan, Vanuatu, Venezuela, Yemen, and
          Zimbabwe and any other jurisdiction in which accessing or using our
          protocol is prohibited (each a &quot;Restricted Country&quot;). We reserve the
          right to choose markets and jurisdictions to conduct business and may
          restrict or refuse the access of Website and our Services in other
          countries or regions in our sole discretion.
        </Paragraph>
      </Section>
      <br />
      <br />
      <Section index="2" title="Eligibility">
        <Paragraph>
          By accessing, using or clicking on our Website and using or attempting
          to use our Services, you represent and warrant that:
        </Paragraph>
        <Paragraph m="8">
          <ol type="a">
            <li>
              as an individual, legal person, or other organization, you have
              full legal capacity and authority to agree and bind yourself to
              these Terms;
            </li>
            <li>
              you are at least 18 or are of legal age to form a binding contract
              under applicable laws;
            </li>
            <li>
              your use of the Services is not prohibited by applicable law, and
              at all times compliant with applicable law, including but not
              limited to regulations on anti-money laundering, anti-corruption,
              and counter-terrorist financing (<b>&quot;CTF&quot;</b>);
            </li>
            <li>
              you are not a citizen, resident or domiciliary in a Restricted
              Country, nor are you using our Services on behalf of any person or
              entity from a Restricted Country;
            </li>
            <li>
              you have not been included in any trade embargoes or economic
              sanctions list, the list of specially designated nationals
              maintained by OFAC, or the denied persons or entity list of the
              U.S. Department of Commerce, nor you have been a subject or target
              of any other economic sanctions administered or enforced by the
              United Nations, the European Union or the United Kingdom;
            </li>
            <li>
              you have not been previously suspended or removed from using our
              Services;
            </li>
            <li>
              if you act as an employee or agent of a legal entity, and enter
              into these Terms on their behalf, you represent and warrant that
              you have all the necessary rights and authorizations to bind such
              legal entity; and
            </li>
            <li>
              you are solely responsible for use of the Services and, if
              applicable, for all activities that occur on or through your user
              account.
            </li>
          </ol>
        </Paragraph>
      </Section>
      <Section index="3" title="Identity Verification">
        <Paragraph>
          We and our affiliates may, but are not obligated to, collect and
          verify information about you in order to keep appropriate record of
          our users, protect us and the community from fraudulent users, and
          identify traces of money laundering, terrorist financing, fraud and
          other financial crimes, or for other lawful purposes.
        </Paragraph>
        <Paragraph>
          We may require you to provide or verify additional information before
          permitting you to access, use or click on our Website and/or use or
          attempt to use our use or access any Service. We may also suspend,
          restrict, or terminate your access to our Website or any or all of the
          Services in the following circumstances: (a) if we reasonably suspect
          you of using our Website and Services in connection with any
          prohibited use or business; (b) your use of our Website or Services is
          subject to any pending litigation, investigation, or government
          proceeding and/or we perceive a heightened risk of legal or regulatory
          non-compliance associated with your activity; or (c) you take any
          action that we deem as circumventing our controls, including, but not
          limited to, abusing promotions which we may offer from time to time.{" "}
        </Paragraph>
        <Paragraph>
          In addition to providing any required information, you agree to allow
          us to keep a record of that information during the period for which
          your account is active and within five (5) years after your account is
          closed. You also authorize us to share your submitted information and
          documentation to third parties to verify the authenticity of such
          information. We may also conduct necessary investigations directly or
          through a third party to verify your identity or protect you and/or us
          from financial crimes, such as fraud, and to take necessary action
          based on the results of such investigations. We will collect, use and
          share such information in accordance with our privacy policy.{" "}
        </Paragraph>
        <Paragraph>
          If you provide any information to us, you must ensure that such
          information is true, complete, and timely updated when changed. If
          there are any grounds for believing that any of the information you
          provided is incorrect, false, outdated or incomplete, we reserve the
          right to send you a notice to demand correction, directly delete the
          relevant information, and as the case may be, terminate all or part of
          the Services we provide for you. You shall be fully liable for any
          loss or expense caused to us during your use of the Services. You
          hereby acknowledge and agree that you have the obligation to keep all
          the information accurate, update and correct at all times.
        </Paragraph>
        <Paragraph>
          We reserve the right to confiscate any and all funds that are found to
          be in violation of relevant and applicable AML or CFT laws and
          regulations, and to cooperate with the competent authorities when and
          if necessary.
        </Paragraph>
      </Section>
      <Section index="4" title="Restrictions">
        <Paragraph>
          You shall not access, use or click on our Website and/or use or
          attempt to use the Services in any manner except as expressly
          permitted in these Terms. Without limiting the generality of the
          preceding sentence, you may NOT:
        </Paragraph>
        <Paragraph m="8">
          <ol type="a">
            <li>
              use our Website or use the Services in any dishonest or unlawful
              manner, for fraudulent or malicious activities, or in any manner
              inconsistent with these Terms;
            </li>
            <li>violate applicable laws or regulations in any manner;</li>
            <li>
              infringe any proprietary rights, including but not limited to
              copyrights, patents, trademarks, or trade secrets of Meta Pool;
            </li>
            <li>
              use our Website or use the Services to transmit any data or send
              or upload any material that contains viruses, Trojan horses,
              worms, time-bombs, keystroke loggers, spyware, adware, or any
              other harmful programs or computer code designed to adversely
              affect the operation of any computer software or hardware;
            </li>
            <li>
              use any deep linking, web crawlers, bots, spiders or other
              automatic devices, programs, scripts, algorithms or methods, or
              any similar or equivalent manual processes to access, obtain,
              copy, monitor, replicate or bypass the Website or the Services;
            </li>
            <li>
              make any back-up or archival copies of the Website or any part
              thereof, including disassembling or de-compilation of the Website;
            </li>
            <li>
              violate public interests, public morals, or the legitimate
              interests of others, including any actions that would interfere
              with, disrupt, negatively affect, or prohibit other Users from
              using our Website and the Services;
            </li>
            <li>
              use the Services for market manipulation (such as pump and dump
              schemes, wash trading, self-trading, front running, quote
              stuffing, and spoofing or layering, regardless of whether
              prohibited by law);
            </li>
            <li>
              attempt to access any part or function of the Website without
              authorization, or connect to the Website or Services or any
              Company servers or any other systems or networks of any the
              Services provided through the services by hacking, password mining
              or any other unlawful or prohibited means;
            </li>
            <li>
              probe, scan or test the vulnerabilities of the Website or Services
              or any network connected to the properties, or violate any
              security or authentication measures on the Website or Services or
              any network connected thereto;
            </li>
            <li>
              reverse look-up, track or seek to track any information of any
              other Users or visitors of the Website or Services;
            </li>
            <li>
              take any actions that imposes an unreasonable or
              disproportionately large load on the infrastructure of systems or
              networks of the Website or Services, or the infrastructure of any
              systems or networks connected to the Website or Services;
            </li>
            <li>
              use any devices, software or routine programs to interfere with
              the normal operation of any transactions of the Website or
              Services, or any other person’s use of the Website or Services; or
            </li>
            <li>
              forge headers, impersonate, or otherwise manipulate
              identification, to disguise your identity or the origin of any
              messages or transmissions you send to Meta Pool or the Website.
            </li>
          </ol>
        </Paragraph>
      </Section>
      <Section index="5" title="Staking">
        <Paragraph>
          We provide a staking service in which Users can stake their NEAR
          tokens on the Platform to receive stNEAR tokens as staking reward and
          to engage in fundraising project event by allowing the fundraising
          project to receive the staking reward. Once the staking instructions
          are confirmed, the system will record such instruction and we cannot
          revert on the process.
        </Paragraph>

        <Paragraph>
          You will be able to commit any reward generated from your staking
          activities to support fundraising project event on our Platform in
          exchange for certain cryptographic utility token or other rewards
          provided by the fundraising project, in accordance with the mechanism
          designed by such fundraising project and the terms and conditions
          thereon. You acknowledge that we cannot promise or guarantee the type
          or amount of cryptographic utility token or reward receiving from
          engaging in any fundraising project event nor the features,
          functionality or value of such token or reward. You shall conduct your
          own due diligence work in relation to each fundraising project and
          fully understand the significant information and conditions prior to
          participate such event such as the allocation date, the underlying
          technology, the features and functions of such project tokens.
        </Paragraph>

        <Paragraph>
          You further acknowledge and agree that we have sole discretion to
          reject your participation in staking, in the event that you are unable
          to fulfil your identity verification requirements or for any other
          suspicious activity detected while participating in our Services.
        </Paragraph>

        <Paragraph>
          In the event that you wish to unstake or withdraw your NEAR tokens,
          you will provide unstaking instructions through our Website. You
          acknowledge and agree that when you unstake your NEAR tokens, the
          delivery time of such NEAR tokens into your wallet may vary based on
          time of day of the request and execution. We may levy a withdrawing
          fee or minimum transaction amount, which will vary and be subject to
          the amendment only at our sole discretion periodically.
        </Paragraph>

        <Paragraph>
          We shall not be liable for any losses caused by your staking or
          unstaking activities on the Platform. You acknowledge and agree that
          we reserve the right to amend any terms related to any specific
          staking protocol implemented by us at any time in our sole discretion.
          We shall not be liable for any losses due to your misunderstanding of
          the terms and conditions of our staking protocol terms and changes to
          such terms.{" "}
        </Paragraph>
      </Section>
      <Section index="6" title="Termination">
        <Paragraph>
          Meta Pool may terminate, suspend, or modify your access to Website
          and/or the Services, or any portion thereof, immediately and at any
          point, at its sole discretion. Meta Pool will not be liable to you or
          to any third party for any termination, suspension, or modification of
          your access to the Services. Upon termination of your access to the
          Services, these Terms shall terminate, except for those clauses that
          expressly or are intended to survive termination or expiry.
        </Paragraph>
      </Section>
      <Section index="7" title="No Warranties and Limitation of Liabilities">
        <Paragraph>
          Meta Pool may terminate, suspend, or modify your access to Website
          and/or the Services, or any portion thereof, immediately and at any
          point, at its sole discretion. Meta Pool will not be liable to you or
          to any third party for any termination, suspension, or modification of
          your access to the Services. Upon termination of your access to the
          Services, these Terms shall terminate, except for those clauses that
          expressly or are intended to survive termination or expiry.
        </Paragraph>
        <Paragraph>
          OUR SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS
          WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR
          STATUTORY. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE NOT RELIED
          UPON ANY OTHER STATEMENT OR AGREEMENT, WHETHER WRITTEN OR ORAL, WITH
          RESPECT TO YOUR USE AND ACCESS OF THE SERVICES.
        </Paragraph>
        <Paragraph>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SPECIFICALLY
          DISCLAIMS ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. META POOL DOES NOT
          MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE WEBSITE, ANY
          PART OF THE SERVICES, INCLUDING MOBILE SERVICES, OR ANY OF THE
          MATERIALS CONTAINED THEREIN, WILL BE CONTINUOUS, UNINTERRUPTED,
          TIMELY, OR ERROR-FREE AND WILL NOT BE LIABLE FOR ANY LOSSES RELATING
          THERETO. META POOL DOES NOT REPRESENT OR WARRANT THAT THE WEBSITE, THE
          SERVICES OR ANY MATERIALS OF META POOL ARE ACCURATE, COMPLETE,
          RELIABLE, CURRENT, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
          COMPONENTS.
        </Paragraph>
        <Paragraph>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NONE OF META POOL
          OR ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, MEMBERS,
          DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES,
          SUPPLIERS OR CONTRACTORS WILL BE LIABLE FOR ANY DIRECT, INDIRECT,
          SPECIAL, INCIDENTAL, INTANGIBLE OR CONSEQUENTIAL LOSSES OR DAMAGES
          ARISING OUT OF OR RELATING TO:
        </Paragraph>
        <Paragraph m="8">
          <ol type="a">
            <li>
              ANY PERFORMANCE OR NON-PERFORMANCE OF THE SERVICES, OR ANY OTHER
              PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF META
              POOL OR ITS AFFILIATES;
            </li>
            <li>
              ANY AUTHORIZED OR UNAUTHORIZED USE OF THE WEBSITE OR SERVICES, OR
              IN CONNECTION WITH THIS AGREEMENT;
            </li>
            <li>
              ANY INACCURACY, DEFECT OR OMISSION OF ANY DATA OR INFORMATION ON
              THE WEBSITE;
            </li>
            <li>
              ANY ERROR, DELAY OR INTERRUPTION IN THE TRANSMISSION OF SUCH DATA;
            </li>
            <li>
              ANY DAMAGES INCURRED BY ANY ACTIONS, OMISSIONS OR VIOLATIONS OF
              THESE TERMS BY ANY THIRD PARTIES; OR
            </li>
            <li>
              ANY DAMAGE CAUSED BY ILLEGAL ACTIONS OF OTHER THIRD PARTIES OR
              ACTIONS WITHOUT AUTHORIZED BY META POOL.
            </li>
            <li>
              EVEN IF META POOL KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF
              SUCH DAMAGES AND NOTWITHSTANDING THE FAILURE OF ANY AGREED OR
              OTHER REMEDY OF ITS ESSENTIAL PURPOSE, EXCEPT TO THE EXTENT OF A
              FINAL JUDICIAL DETERMINATION THAT SUCH DAMAGES WERE A RESULT OF
              OUR GROSS NEGLIGENCE, ACTUAL FRAUD, WILLFUL MISCONDUCT OR
              INTENTIONAL VIOLATION OF LAW OR EXCEPT IN JURISDICTIONS THAT DO
              NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR
              CONSEQUENTIAL DAMAGES. THIS PROVISION WILL SURVIVE THE TERMINATION
              OF THESE TERMS.
            </li>
          </ol>
        </Paragraph>
        <Paragraph>
          WE MAKE NO WARRANTY AS TO THE MERIT, LEGALITY OR JURIDICAL NATURE OF
          ANY TOKEN SOLD ON OUR PLATFORM (INCLUDING WHETHER OR NOT IT IS
          CONSIDERED A SECURITY OR FINANCIAL INSTRUMENT UNDER ANY APPLICABLE
          SECURITIES LAWS).
        </Paragraph>
      </Section>
      <Section index="8" title="Intellectual Property">
        <Paragraph>
          All present and future copyright, title, interests in and to the
          Services, registered and unregistered trademarks, design rights,
          unregistered designs, database rights and all other present and future
          intellectual property rights and rights in the nature of intellectual
          property rights that exist in or in relation to the use and access of
          the Website and the Services are owned by or otherwise licensed to
          Meta Pool. Subject to your compliance with these Terms, we grant you a
          non-exclusive, non-sub license, and any limited license to merely use
          or access the Website and the Services in the permitted hereunder.
        </Paragraph>
        <Paragraph>
          Except as expressly stated in these Terms, nothing in these Terms
          should be construed as conferring any right in or license to our or
          any other third party’s intellectual rights.
        </Paragraph>
        <br />
        <Paragraph>
          If and to the extent that any such intellectual property rights are
          vested in you by operation of law or otherwise, you agree to do any
          and all such acts and execute any and all such documents as we may
          reasonably request in order to assign such intellectual property
          rights back to us.
        </Paragraph>
        <Paragraph>
          You agree and acknowledge that all content on the Website must not be
          copied or reproduced, modified, redistributed, used, created for
          derivative works, or otherwise dealt with for any other reason without
          being granted a written consent from us.
        </Paragraph>
        <Paragraph>
          Third parties participating on the Website may permit us to utilise
          trademarks, copyrighted material, and other intellectual property
          associated with their businesses. We will not warrant or represent
          that the content of the Website does not infringe the rights of any
          third party.{" "}
        </Paragraph>
      </Section>
      <Section index="9" title="Independent Parties">
        <Paragraph>
          Meta Pool is an independent contractor but not an agent of you in the
          performance of these Terms. These Terms shall not be interpreted as
          facts or evidence of an association, joint venture, partnership or
          franchise between the parties.
        </Paragraph>
      </Section>
      <Section index="10" title="No Professional Advice">
        <Paragraph>
          All information provided on the Website and throughout our Services is
          for informational purposes only and should not be construed as
          professional advice. We do not provide investment advice and any
          content contained on the Website should not be considered as a
          substitute for tailored investment advice. Investing in digital assets
          is highly risky and may lead to a total loss of investment. You must
          have sufficient understanding of cryptographic tokens, token storage
          mechanisms (such as token wallets), and blockchain technology to
          appreciate the risks involved in dealing in digital assets. You
          understand and agree that the value of digital assets can be volatile,
          and we are not in any way responsible or liable for any losses you may
          incur by using or transferring digital assets in connection with our
          Services. You should not take, or refrain from taking, any action
          based on any information contained on the Website. Before you make any
          financial, legal, or other decisions involving our Services, you
          should seek independent professional advice from an individual who is
          licensed and qualified in the area for which such advice would be
          appropriate.
        </Paragraph>
      </Section>
      <Section index="11" title="Indemnification">
        <Paragraph>
          You agree to indemnify and hold harmless Meta Pool and its affiliates
          and their respective shareholders, members, directors, officers,
          employees, attorneys, agents, representatives, suppliers or
          contractors from and against any potential or actual claims, actions,
          proceedings, investigations, demands, suits, costs, expenses and
          damages (including attorneys’ fees, fines or penalties imposed by any
          regulatory authority) arising out of or related to:
        </Paragraph>
        <Paragraph m="8">
          <ol type="a">
            <li>
              your use of, or conduct in connection with, the Website or
              Services;
            </li>
            <li>your breach or our enforcement of these Terms; or</li>
            <li>
              your violation of any applicable law, regulation, or rights of any
              third party during your use of the Website or Services.
            </li>
          </ol>
        </Paragraph>
        <Paragraph>
          If you are obligated to indemnify Meta Pool and its affiliates and
          their respective shareholders, members, directors, officers,
          employees, attorneys, agents, representatives, suppliers or
          contractors pursuant to these Terms, Meta Pool will have the right, in
          its sole discretion, to control any action or proceeding and to
          determine whether Meta Pool wishes to settle, and if so, on what
          terms.
        </Paragraph>
        <Paragraph>
          Your obligations under this indemnification provision will continue
          even after these Terms have expired or been terminated.
        </Paragraph>
      </Section>

      <Section index="12" title="Confidentiality">
        <Paragraph>
          You acknowledge that the Services contain Meta Pool’s and its
          affiliates’ trade secrets and confidential information. You agree to
          hold and maintain the Services in confidence, and not to furnish any
          other person any confidential information of the Services or the
          Website. You agree to use a reasonable degree of care to protect the
          confidentiality of the Services. You will not remove or alter any of
          Meta Pool’s or its affiliates’ proprietary notices. Your obligations
          under this provision will continue even after these Terms have expired
          or been terminated.
        </Paragraph>
      </Section>

      <Section
        index="13"
        title="Anti-Money Laundering
"
      >
        <Paragraph>
          Meta Pool expressly prohibits and rejects the use of the Website or
          the Services for any form of illicit activity, including money
          laundering, terrorist financing or trade sanctions violations. By
          using the Website or the Services, you represent that you are not
          involved in any such activity.
        </Paragraph>
      </Section>

      <Section
        index="14"
        title="Force Majeure
"
      >
        <Paragraph>
          Meta Pool has no liability to you if it is prevented from or delayed
          in performing its obligations or from carrying on its Services and
          business, by acts, events, omissions or accidents beyond its
          reasonable control, including, without limitation, strikes, failure of
          a utility service or telecommunications network, act of God, war,
          riot, civil commotion, malicious damage, compliance with any law or
          governmental order, rule, regulation, or direction.
        </Paragraph>
      </Section>

      <Section index="15" title="Jurisdiction and Governing Law">
        <Paragraph>
          The parties shall attempt in good faith to mutually resolve any and
          all disputes, whether of law or fact, and of any nature whatsoever
          arising from or with respect to these Terms. These Terms and any
          dispute or claim arising out of or in connection with the Services or
          the Website shall be governed by, and construed in accordance with,
          the laws of the British Virgin Islands.
        </Paragraph>

        <Paragraph>
          Any dispute that is not resolved after good faith negotiations may be
          referred by either party for final, binding resolution by arbitration
          under the arbitration rules of the British Virgin Islands
          International Arbitration Centre (&quot;BVIIAC&quot;) under the BVIIAC
          Administered Arbitration Rules in force when the notice of arbitration
          is submitted. The law of this arbitration clause shall be the laws of
          British Virgin Islands. The seat of arbitration shall be the British
          Virgin Islands. The number of arbitrators shall be one (1). The
          arbitration proceedings shall be conducted in English.
        </Paragraph>

        <Paragraph>
          Any Dispute arising out of or related to these Terms is personal to
          you and us and will be resolved solely through individual arbitration
          and will not be brought as a class arbitration, class action or any
          other type of representative proceeding. There will be no class
          arbitration or arbitration in which an individual attempts to resolve
          a dispute as a representative of another individual or group of
          individuals. Further, a dispute cannot be brought as a class or other
          type of representative action, whether within or outside of
          arbitration, or on behalf of any other individual or group of
          individuals.
        </Paragraph>
      </Section>

      <Section index="16" title="Severability">
        <Paragraph>
          If any provision of these Terms is determined by any court or other
          competent authority to be unlawful or unenforceable, the other
          provisions of these Terms will continue in effect. If any unlawful or
          unenforceable provision would be lawful or enforceable if part of it
          were deleted, that part will be deemed to be deleted, and the rest of
          the provision will continue in effect (unless that would contradict
          the clear intention of the clause, in which case the entirety of the
          relevant provision will be deemed to be deleted).
        </Paragraph>
      </Section>

      <Section index="17" title="Notices">
        <Paragraph>
          All notices, requests, demands, and determinations for us under these
          Terms (other than routine operational communications) shall be sent to
          [insert email].
        </Paragraph>
      </Section>

      <Section index="18" title="Assignment">
        <Paragraph>
          You may not assign or transfer any right to use the Services or any of
          your rights or obligations under these Terms without prior written
          consent from Meta Pool, including any right or obligation related to
          the enforcement of laws or the change of control. Meta Pool may assign
          or transfer any or all of its rights or obligations under these Terms,
          in whole or in part, without notice or obtaining your consent or
          approval.
        </Paragraph>
      </Section>

      <Section
        index="19"
        title="Third Party Rights
"
      >
        <Paragraph>
          No third party shall have any rights to enforce any terms contained
          herein.
        </Paragraph>
      </Section>

      <Section
        index="20"
        title="Third Party Website Disclaimer
"
      >
        <Paragraph>
          Any links to third party websites from our Services does not imply
          endorsement by us of any product, service, information or disclaimer
          presented therein, nor do we guarantee the accuracy of the information
          contained on them. If you suffer loss from using such third party
          product and service, we will not be liable for such loss. In addition,
          since we have no control over the terms of use or privacy policies of
          third-party websites, you should carefully read and understand those
          policies.
        </Paragraph>
      </Section>

      <Paragraph fontWeight="bold">
        BY MAKING USE OF OUR SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (A) YOU
        ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF ENCRYPTED OR
        DIGITAL TOKENS OR CRYPTOCURRENCIES WITH A CERTAIN VALUE THAT ARE BASED
        ON BLOCKCHAIN AND CRYPTOGRAPHY TECHNOLOGIES AND ARE ISSUED AND MANAGED
        IN A DECENTRALIZED FORM (&quot;DIGITIAL CURRENCIES&quot;); (B) YOU SHALL ASSUME
        ALL RISKS RELATED TO THE USE OF THE SERVICES AND TRANSACTIONS OF DIGITAL
        CURRENCIES; AND (C) META POOL SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR
        ADVERSE OUTCOMES. AS WITH ANY ASSET, THE VALUES OF DIGITAL CURRENCIES
        ARE VOLATILE AND MAY FLUCTUATE SIGNIFICANTLY AND THERE IS A SUBSTANTIAL
        RISK OF ECONOMIC LOSS WHEN PURCHASING, HOLDING OR INVESTING IN DIGITAL
        CURRENCIES.
      </Paragraph>
    </Container>
  </>
);

export default TermsAndConditions;
