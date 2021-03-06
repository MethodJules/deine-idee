import React, { ReactElement } from "react";
import gql from "graphql-tag";
import wirvsvirus from "../images/wirvsvirus3.png";
import wirvsvirusLogo from "../images/wirvsvirus-logo.png";

import ReactMarkdown from "react-markdown";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { Comments } from "~/components/Comments";

const IDEAS = gql`
  {
    ideas {
      title
    }
  }
`;

export function IdeaDetail(props): JSX.Element {
  // const { loading, error, data } = useQuery(IDEAS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  const id = props.match.params.id;

  const ideas = [
    {
      id: 1,
      title: "Auslastungsmanagement",
      issue: "Unvermeindliche Menschenansammlungen in Supermärkten.",
      challenge:
        "Wie kann man Supermärkte und andere öffentliche Orte bestmöglichst auslasten, sodass so wenig Menschen wie möglich sich begegnen (Stoßzeiten vermeiden).",
      labels: [
        {
          title: "Kommunikation & Informationsvermittlung",
          color: "blue-300",
        },
      ],
      comments: [
        {
          name: "Johannes",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo.",
          comments: [
            {
              name: "Johannes",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo. Praesent ornare, metus in pulvinar mollis, elit risus convallis nisi, eget pharetra nisi turpis euismod turpis..",
              comments: [
                {
                  name: "Stefan",
                  text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo. Praesent ornare, metus in pulvinar mollis, elit risus convallis nisi, eget pharetra nisi turpis euismod turpis. Cras vitae risus mauris. Vivamus ac quam felis.",
                  comments: [],
                },
              ],
            },
          ],
        },
        {
          name: "Stefan",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo.",
          comments: [
            {
              name: "Stefan",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate.",
              comments: [
                {
                  name: "Stefan",
                  text:
                    "Lorem ipsum dolor sit amet.",
                  comments: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Unterstützung von Personen die kein Internetzugriff haben",
      issue:
        "Es gibt bereits zahlreiche Webseiten, Chatgruppen(Whatsapp/Telegram) und App's, welche die Kommunikation zwischen Hilfesuchenden und Leuten die Hilfe anbieten erleichtert.\n\nz.B.:\n* Webseite: [quarantaenehelden.org](http://www.quarantaenehelden.org/)\n* Telegram Gruppe: https://t.me/CoronaSoliDarmstadt\n* Weite Gruppen: https://pad.systemli.org/p/9M9GOR5J4Zjnd74dXInr-keep\nWas ist aber mit Leuten die keinen Zugriff auf solche Medien hat z.B. die ältere Generation? Ein Vorschlag wäre eine Art Hotline einzurichten die autonom arbeitet.",
      challenge:
        "Wie können wir Personen ohne Internetzugriff Informationen bereitstellen und Unterstützung anbieten?",
      approach:
        "Die Lösungen sind bisher rein Internet gebunden. Es gibt bereits zahlreiche Webseiten, Chatgruppen(Whatsapp/Telegram) und App's, welche die Kommunikation zwischen Hilfesuchenden und Leuten die Hilfe anbieten erleichtert.\n\n z.B.:\n* Webseite: http://www.quarantaenehelden.org/\n* Telegram Gruppe: https://t.me/CoronaSoliDarmstadt\n* Weite Gruppen: https://pad.systemli.org/p/9M9GOR5J4Zjnd74dXInr-keep",
      labels: [
        {
          title: "Kommunikation & Informationsvermittlung",
          color: "blue-300",
        },
        { title: "Solidarität und Zusammenhalt", color: "orange-300" },
      ],
      comments: [
        {
          name: "Leonie",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo. Praesent ornare, metus in pulvinar mollis, elit risus convallis nisi, eget pharetra nisi turpis euismod turpis. Cras vitae risus mauris. Vivamus ac quam felis.",
          comments: [
            {
              name: "Johannes",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo. Praesent ornare, metus in pulvinar mollis, elit risus convallis nisi, eget pharetra nisi turpis euismod turpis. Cras vitae risus mauris. Vivamus ac quam felis.",
              comments: [],
            },
          ],
        },
        {
          name: "Stefan",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur augue sit amet ex vulputate, in faucibus tellus commodo. Praesent ornare, metus in pulvinar mollis, elit risus convallis nisi, eget pharetra nisi turpis euismod turpis. Cras vitae risus mauris. Vivamus ac quam felis.",
          comments: [],
        },
      ],
    },
  ];

  const data = { idea: ideas.filter(i => i.id == id)[0] };

  const renderers = {
    list: (item: any): ReactElement => (
      <ul className="list-disc pl-4">{item.children}</ul>
    ),
    link: (item: any): ReactElement => (
      <a className="text-blue-400" href={item.href}>
        {item.children}
      </a>
    ),
  };

  const { title, issue, challenge, approach, labels } = data.idea;
  const idea = (
    <div>
      <div className="bg-white rounded p-4 border border-gray-400 mb-4">
        <div className="mb-2">
          <div className="font-bold text-2xl mb-2">{title}</div>
        </div>
      </div>
      <div className="bg-white rounded p-4 border border-gray-400 mb-4">
        <div className="mb-2">
          <div className="font-bold uppercase text-gray-700 text-base tracking-wider mb-1">
            Problem
          </div>
          <div className="mb-3">
            <ReactMarkdown source={issue} renderers={renderers} />
          </div>
          <div className="font-bold uppercase text-gray-700 text-base tracking-wider mb-1">
            Herausforderung
          </div>
          <div className="mb-3">
            <ReactMarkdown source={challenge} renderers={renderers} />
          </div>
          {approach && (
            <div className="font-bold uppercase text-gray-700 text-base tracking-widest mb-1">
              Lösungansatz
            </div>
          )}
          <div className="mb-3">
            <ReactMarkdown source={approach} renderers={renderers} />
          </div>
          <div className="mb-3 mx-10 pointer-events-none">
            <Range
              className="mb-10"
              marks={{
                0: "Neu",
                25: "In Arbeit",
                50: "Wird geprüft",
                75: "In Umsetzung",
                100: "Veröffentlichung",
              }}
              defaultValue={[0, 50]}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded p-4 border border-gray-400 mb-4">
        <div className="mb-2">
          <div className="font-bold uppercase text-gray-700 text-base tracking-widest mb-1">
            Diskussion
          </div>
          <Comments content={data.idea.comments} />
        </div>
      </div>
    </div>
  );

  const sidebar = (
    <div className="flex flex-col rounded bg-white rounded border border-gray-400 p-3">
      <div className="font-bold mb-2">#WirVsVirus</div>
      <div className="mb-5">
        Wie können wir als Gesellschaft die Herausforderungen, die im Zuge der
        Corona Krise entstehen, mit neuen Lösungen gemeinsam meistern?
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col w-1/2 py-1">
          <div className="font-medium text-lg">800</div>
          <div className="font-bold">Ideen</div>
        </div>
        <div className="flex flex-col w-1/2 py-1">
          <div className="font-medium text-lg">42t</div>
          <div className="font-bold">Teilnehmer</div>
        </div>
        <div className="flex flex-col w-1/2 py-1">
          <div className="font-medium text-lg">Solidarität</div>
          <div className="font-bold">Kategorie</div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        {labels!.map(label => (
          <span
            className={`bg-${label.color} text-sm rounded-full px-3 py-1 m-1 truncate ...`}
            title={label.title}
          >
            {label.title}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex justify-center h-200px">
        <img className="h-200px" src={wirvsvirus} />
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex flex-col w-976px bg-white">
          <div className="flex mb-3">
            <img className="h-20 rounded-full -mt-4" src={wirvsvirusLogo} />
            <div>
              <div className="font-bold text-2xl p-2">#WirVsVirus</div>
            </div>
          </div>
          <div className="flex">
            <div className="font-bold text-gray-800 px-4 pt-2 pb-1 border-b-4 border-red-500">
              Ideen
            </div>
            <div className="font-bold text-gray-700 px-4 pt-2 pb-1">
              Projekte
            </div>
            <div className="font-bold text-gray-700 px-4 pt-2 pb-1">Wiki</div>
            <div className="font-bold text-gray-700 px-4 pt-2 pb-1">
              Einführung
            </div>
            <div className="font-bold text-gray-700 px-4 pt-2 pb-1">
              Leichte Sprache
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex justify-center mx-4 my-5">
        <div className="w-640px">{idea}</div>
        <div className="w-312px ml-24px">{sidebar}</div>
      </div>
    </div>
  );
}
