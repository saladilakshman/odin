import React from "react";
import "./foot.css";
function Terms() {
  const Terms = [
    {
      id: 1,
      heading: `Introduction`,
      desc: `This document should be read in conjunction with Thinkful's privacy policy and terms of service.`
    },
    {
      id: 2,
      heading: `Preamble`,
      desc: `Welcome to The Odin Project, a service provided by The Odin Project ("The Odin Project", "The Project", "Odin Project", "we" "our", or "us").

    These Terms of Use govern your use of theodinproject.com (the "Website") and all related widgets, tools, applications, data, software, APIs (which may also be subject to separate API Terms of Use) and other services provided by us (the "Services").
    
    These Terms of Use constitute a legally binding agreement (the “Agreement”) between you and us in relation to your use of the Website and Services (together, the "Platform").`
    },
    {
      id: 3,
      heading: `Acceptance of Terms and Use`,
      desc: `Please read these Terms of Use very carefully. If you do not agree to any of the provisions set out in this document, you should not use the Website or any of the Services. By accessing or using the Platform, registering an account, or by viewing, accessing, uploading or downloading any information or content from or to the Platform, you represent and warrant that you have read and understood the Terms of Use, will abide by them, and that you are either 18 years of age or more, or you are 13 years of age or more and have your parent(s)' or legal guardian(s)' permission to use the Platform.`
    },
    {
      id: 4,
      heading: `Changes To Terms Of Use`,
      desc: `We reserve the right to change, alter, replace or otherwise modify these Terms of Use at any time. We recommend that you periodically check this Site for changes.`
    },
    {
      id: 5,
      heading: `Description of the Platform`,
      desc: `The Platform is a learning service which displays content from third-party sources and allows registered users to participate in discussions. Registered users of the Platform may contribute content, data or information ("Content"). The Platform also enables registered users to interact with one another and to contribute to discussions.

We may, from time to time, release new tools and resources on the Website, release new versions of our Website, or introduce other services and/or features for the Platform. Any new services and features will be subject to these Terms of Use as well as any additional terms of use that we may release for those specific services or features.`
    },
    {
      id: 6,
      heading: `Your Odin Project Account`,
      desc: `You are not obliged to register to use the Platform. However, access to certain Services is only available to registered users.

When you register to use the Platform, you will provide us with your email address, a username and password for your account. You must ensure that the email address that you provide is, and remains, valid.

You are solely responsible for maintaining the confidentiality and security of your username and password, and you will remain responsible for all use of your username and password, and all activity emanating from your account, whether or not such activity was authorized by you.

If your username or password is lost or stolen, or if you believe that your account has been accessed by unauthorized third parties, you are advised to notify The Odin Project in writing, and should change your password at the earliest possible opportunity.

We reserve the right to disallow, cancel, remove or reassign certain usernames and permalinks in appropriate circumstances, as determined by us in our sole discretion, and may, with or without prior notice, suspend or terminate your account if activities occur on that account which, in our sole discretion, would or might constitute a violation of these Terms of Use, or an infringement or violation of the rights of any third party, or of any applicable laws or regulations.

You may terminate your account at any time as described in the Termination section below.`
    },
    {
      id: 7,
      heading: `Your Use of the Platform`,
      desc: `Subject to your strict compliance with these Terms of Use, The Odin Project grants you a limited, personal, non-exclusive, revocable, non-assignable and non-transferable right and license to use the Platform in order to view Content on the Website.

In addition, if you register to use the Platform, and subject to your strict compliance with these Terms of Use, The Odin Project grants you a limited, personal, non-exclusive, revocable, non-assignable and non-transferable right and license to:

(i) submit, upload or post Content to the Platform strictly as permitted in accordance with these Terms of Use and any other applicable terms posted on the Website from time to time;

(ii) participate in the community areas and communicate with other members of the The Odin Project community strictly in accordance with these Terms of Use; and

(iii) use other Services provided as part of the Platform strictly as permitted in accordance with these Terms of Use and any other terms applicable to those Services from time to time.

The above licenses are conditional upon your strict compliance with these Terms, including, without limitation, the following:

(i) You must not adapt, copy, republish, make available or otherwise communicate to the public, display, perform, transfer, share, distribute or otherwise use or exploit any Content on or from the Platform, except (i) where such Content is Your Content, or (ii) as permitted under these Terms of Use, and within the parameters displayed alongside that Content (for example, under the terms of Creative Commons licenses).

(ii) You must not employ scraping or similar techniques to aggregate, repurpose, republish or otherwise make use of any Content.

(iii) You must not alter or remove, attempt to alter or remove, any trademark, copyright or other proprietary or legal notices contained in, or appearing on, the Platform or any Content appearing on the Platform (other than Your Content).

(iv) You must not use the Platform to upload, post, store, transmit, display, copy, distribute, promote, make available or otherwise communicate to the public:

any Content that is offensive, abusive, libelous, defamatory, obscene, racist, sexually explicit, ethnically or culturally offensive, indecent, that promotes violence, terrorism, or illegal acts, incites hatred on grounds of race, gender, religion or sexual orientation, or is otherwise objectionable in The Odin Project's reasonable discretion;

any information, Content or other material that violates, plagiarizes, misappropriates or infringes the rights of third parties including, without limitation, copyright, trademark rights, rights of privacy or publicity, confidential information or any other right; or

any Content that violates, breaches or is contrary to any law, rule, regulation, court order or is otherwise is illegal or unlawful in The Odin Project's reasonable opinion;

any material of any kind that contains any virus, Trojan horse, spyware, adware, malware, bot, time bomb, worm, or other harmful or malicious component, which or might overburden, impair or disrupt the Platform or servers or networks forming part of, or connected to, the Platform, or which does or might restrict or inhibit any other user's use and enjoyment of the Platform; or any unsolicited or unauthorized advertising, promotional messages, spam or any other form of solicitation.

(v) You must not commit or engage in, or encourage, induce, solicit or promote, any conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any law or regulation.

(vi) You must not rent, sell or lease access to the Platform, or any Content on the Platform (except as dictated by the specific terms of that Content), without prior written agreement from The Odin Project.

(vii) You must not deliberately impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity, for example, by registering an account in the name of another person or company, or sending messages or making comments using the name of another person.

(viii) You must not stalk, exploit, threaten, abuse or otherwise harass another user, or any The Odin Project employee.

(ix) You must not use or attempt to use another person's account, password, or other information, unless you have express permission from that other person.

(x) You must not sell or transfer, or offer to sell or transfer, any The Odin Project account to any third party without the prior written approval of The Odin Project.

(xi) You must not collect or attempt to collect personal data, or any other kind of information about other users, including without limitation, through spidering or any form of scraping.

(xii) You must not violate, circumvent or attempt to violate or circumvent any data security measures employed by The Odin Project; access or attempt to access data or materials which are not intended for your use; log into, or attempt to log into, a server or account which you are not authorized to access; attempt to scan or test the vulnerability of The Odin Project's servers, system or network or attempt to breach The Odin Project's data security or authentication procedures; attempt to interfere with the Website or the Services by any means including, without limitation, hacking The Odin Project's servers or systems, submitting a virus, overloading, mail-bombing or crashing. Without limitation to any other rights or remedies of The Odin Project under these Terms of Use, The Odin Project reserves the right to investigate any situation that appears to involve any of the above, and may report such matters to, and co-operate with, appropriate law enforcement authorities in prosecuting any users who have participated in any such violations.

You agree to comply with the above conditions, and acknowledge and agree that The Odin Project has the right, in its sole discretion, to terminate your account or take such other action as we see fit if you breach any of the above conditions or any of the other terms of these Terms of Use. This may include taking court action and/or reporting offending users to the relevant authorities.`
    },
    {
      id: 8,
      heading: `Rporting Infringements`,
      desc: `If you discover any Content on the Platform that you believe infringes your copyright, please report this to us using any of the methods outlined on our Contact Page (http://theodinproject.com/contact).

Please make sure that you include the following information:

a statement that you have identified Content on The Odin Project that infringes your copyright or the copyright of a third party on whose behalf you are entitled to act;a description of the copyright work(s) that you claim have been infringed;

a description of the Content that you claim is infringing and the The Odin Project URL(s) where such Content can be located;

your full name, address and telephone number, a valid email address on which you can be contacted, and your The Odin Project user name if you have one;

a statement by you that you have a good faith belief that the disputed use of the material is not authorized by the copyright owner, its agent, or the law; and

a statement by you that the information in your notice is accurate and that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed;

In addition, if you wish for your notice to be considered as a notice pursuant to the United States Digital Millennium Copyright Act 17 U.S.C. §512(c), please also include the following:

with respect to your statement that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed, confirmation that such statement is made under penalty of perjury; and

your electronic or physical signature (which may be a scanned copy).

In all other cases, if you discover Content that infringes any or violates any of your other rights, which you believe is defamatory, pornographic, obscene, racist or otherwise liable to cause widespread offence, or which constitutes impersonation, harassment, spam or otherwise violates these Terms of Use, our Community Guidelines or applicable law, please report this to us at theodinprojectcontact@gmail.com.

`
    }
  ];
  return (
    <div className="sector">
      {Terms.map((term) => {
        return (
          <div
            key={term.id}
            className="row d-flex justify-content-center align-items-center"
          >
            <div className="col-sm-6">
              <h3 className="text-start">{term.heading}</h3>
              <p className="text-secondary text-center text-break p-3 gap-2">
                {term.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Terms;
