window.LISTENING_STUDY = {
  "study": "aws-listening-balanced84-20261122",
  "release": "ca42f8b2b406302222064e2e204499295d11de08b6e92f51cbae0538845b55cc",
  "priorReleases": [],
  "questions": [
    {
      "id": "q_18c962b0b6d28590f03740ac",
      "subtype": "joint_direction_change_causes_multi_select",
      "format": "multiple_select",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 6 seconds in the supplied audio.\n\nThis is one continuous recording. In every option, you keep facing the same direction. Initially, the source is 1.65 m directly in front of you at ear level. The same sound is played at a fixed gain in every option. The moving person or source travels 1.5 m in a straight line in the stated direction throughout the recording, without reversing.",
      "question": "Listen to the recording. Each option describes a separate possible scene. Which scenes could produce the same changes in sound direction as this recording? Select all that apply. Judge each option on its own; do not combine the selected scenes.",
      "instruction": "Return the letters of all correct options.",
      "options": [
        {
          "letter": "A",
          "text": "The source stays fixed while you move to your right without turning."
        },
        {
          "letter": "B",
          "text": "You stay still while the source moves to your right along a straight line."
        },
        {
          "letter": "C",
          "text": "You stay still while the source moves to your left along a straight line."
        },
        {
          "letter": "D",
          "text": "The source stays fixed while you move to your left without turning."
        }
      ],
      "promptSha256": "a8aecb7fda3592d5b06d23dfa927c35be649433df2e7e6c65b0bec03922ef450",
      "directForA": false,
      "clips": [
        {
          "file": "clips/430901b6d55f82f0.wav",
          "sha256": "8a404154e46abca4f41580335b373ad768bce301146f629ea2cc3506757ebded",
          "view": "direct_binaural"
        },
        {
          "file": "clips/df4de8bbf9460846.wav",
          "sha256": "5ca8abc364a4d4d390bfc4ab0e72f307736926d88c1d313672e6d0b47605ef5c",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_9a3fb691e419ee2c307572dc",
      "subtype": "match_timed_movement_audio",
      "format": "single_choice",
      "setup": "Each recording has its own timeline, starting at 0 seconds.\n\nEach candidate is one continuous recording. Initially, the source was 0.55 m directly in front of you at ear level. From 0 to 2.5 seconds, you moved 0.55 m toward the right of your initial facing direction while keeping your current heading. From 2.5 to 5 seconds, you turned your head 45 degrees to your left without changing position.",
      "question": "The source stayed fixed. Which recording matches the two movements shown on the timeline?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 2"
        },
        {
          "letter": "B",
          "text": "Candidate 1"
        }
      ],
      "promptSha256": "fbe0ed3bc5c17a1964a5ed5c6dcf8266f40a68b84f31e1eacab15e740d1babac",
      "directForA": true,
      "clips": [
        {
          "file": "clips/e4ddd307f246af7a.wav",
          "sha256": "0e3ab19787df32560d83d3c69bbf8801d22606c616235f6cd1e7c2300bf087fe",
          "view": "direct_binaural"
        },
        {
          "file": "clips/cd6f372cb2a158ad.wav",
          "sha256": "b17a5c6d98d9e330e3b31feb5ef4a27088dc225ec9b3963999d6d1e89518c4c7",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Candidate 1",
          "start_s": 0.0,
          "end_s": 5.0
        },
        {
          "label": "Candidate 2",
          "start_s": 5.0,
          "end_s": 10.0
        }
      ]
    },
    {
      "id": "q_4f6d26fe88747db6732d38fb",
      "subtype": "infer_translation",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "The source stayed fixed. You moved in a straight line at the same height without turning. You did not move diagonally. Recording 1 is before the move; Recording 2 is after. In which direction did you move?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Straight forward"
        },
        {
          "letter": "B",
          "text": "Straight to your left"
        },
        {
          "letter": "C",
          "text": "Straight to your right"
        },
        {
          "letter": "D",
          "text": "Straight backward"
        }
      ],
      "promptSha256": "245a7fc28bc73fdbcd2bad020e72a91af146312ea9692214fbb84d061e3d0063",
      "directForA": false,
      "clips": [
        {
          "file": "clips/a1c05539c8d2531c.wav",
          "sha256": "f61fd7f6cbcea06494ab7ac03ceb929cb472231a9009e8788bccd938833a518b",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1971bc094768a27c.wav",
          "sha256": "1f9a9fe89d6392cb9184dad08c059f4c7ad42faec54a395648e7810a2a8ff584",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_9ee91eff13132403b48181c0",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your right without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "7273040a9796d3844d402c112481603116f68cca6eb96ce228d44e04ef615309",
      "directForA": false,
      "clips": [
        {
          "file": "clips/b8da7a190bea48d1.wav",
          "sha256": "1a30e20edeee83e96793af2570e57dc28f9104fbfbe20d57d3c6ef3104b5b8ad",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1560f43370d5817a.wav",
          "sha256": "f930071780f661f70c4a63c77bca5e5c84d218f6695e3a7b4f2c3c226637f825",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_58446713da793f9c5c0b8937",
      "subtype": "translation_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. You moved 3.7 metres between the recordings. Loudness depends only on the distance between you and the sound source.",
      "question": "The source stayed in one place. Recording 1 was made before you moved and Recording 2 after. Compared with Recording 1, is the source closer, farther away, or at about the same distance from you in Recording 2?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Farther away"
        },
        {
          "letter": "B",
          "text": "Approximately the same distance"
        },
        {
          "letter": "C",
          "text": "Closer"
        }
      ],
      "promptSha256": "0c7cd94fd5344f5cc89754743cb1538660d1f42a9642e3dab43413905cff9519",
      "directForA": false,
      "clips": [
        {
          "file": "clips/7e9245a52e019cd3.wav",
          "sha256": "3db94750d411113bfd071b2ea4f42a8957ecfe2432d3253b4242aba478dd6040",
          "view": "direct_binaural"
        },
        {
          "file": "clips/aea8fa6319e8dc12.wav",
          "sha256": "2cca8e4879718640b010b579c2d1a9a03ab90f9472c5315b87e982fe245b91dc",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_655282a3896fc113ead8f0ae",
      "subtype": "source_direction_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording. Consider the direction above or below you.",
      "question": "Your position and facing direction stay fixed. How does the sound source's direction change during the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "from above to below"
        },
        {
          "letter": "B",
          "text": "from below to above"
        },
        {
          "letter": "C",
          "text": "remains unchanged"
        }
      ],
      "promptSha256": "97430d559f3d7e2319141b1c750b961a3e16dc9efadf3aa3a56c77cf8e1c65a2",
      "directForA": false,
      "clips": [
        {
          "file": "clips/4ce625afba6e5952.wav",
          "sha256": "076bc8e7cfa9667534304e6bf4c90be32ed7f1ee74616e1392a1e9644f255e8e",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1ec53cb79ad675df.wav",
          "sha256": "5e07686fc3aa36744a1f23d802f637836c6b8a70813aeca07c686dc31309268d",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_78987b6e30fb93aea1ed02be",
      "subtype": "match_joint_motion_audio",
      "format": "single_choice",
      "setup": "Each candidate is one continuous recording.",
      "question": "Initially, the source is 0.65 m directly in front of you at ear level. You stay in the same position and turn your head 90 degrees to your right. At the same time, the source moves 45 degrees around you in the same direction as your turn, staying at the same height and distance from you. Both movements happen at steady speeds throughout each candidate recording. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear during these movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 1"
        },
        {
          "letter": "B",
          "text": "Candidate 2"
        }
      ],
      "promptSha256": "ea5fb75abd9076b3285b36931cfc8f1c5d55926744fae73127fdcb5c8e8806d6",
      "directForA": false,
      "clips": [
        {
          "file": "clips/e004058f190fe0fa.wav",
          "sha256": "cfaee82b9a7d4ae0e945ef0912e2265dfd3c691ab4f59c00a3bdfa982c856190",
          "view": "direct_binaural"
        },
        {
          "file": "clips/51728ce6d8d7bcfd.wav",
          "sha256": "5295a3bcf605a41fd7c4612141b462712da42096e721d9549e1a551cf3fc0858",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Candidate 1",
          "start_s": 0.0,
          "end_s": 5.0
        },
        {
          "label": "Candidate 2",
          "start_s": 5.0,
          "end_s": 10.0
        }
      ]
    },
    {
      "id": "q_96f002ecd60dfa3eaba96726",
      "subtype": "static_left_right",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe sound source remains stationary throughout the recording.",
      "question": "Is the sound source on your left or on your right?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Right"
        },
        {
          "letter": "B",
          "text": "Left"
        }
      ],
      "promptSha256": "eadefbd41bf7059bd9e6c310ea4367caad27ae44f6c0f7a366404021be6988f0",
      "directForA": true,
      "clips": [
        {
          "file": "clips/5bf5fc41a354361c.wav",
          "sha256": "a59c86e5cc4cbd84e186a9ba56c9cd66684602112235fc43642b040c7dd8f96f",
          "view": "direct_binaural"
        },
        {
          "file": "clips/0c99bd0832b01fd2.wav",
          "sha256": "c2b5b7e3e41686d8779aefadc2b5f604b28b03ef7acfb73ce6f07d566a21e185",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_65ca22fa5da0988b5a176557",
      "subtype": "source_direction_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording.",
      "question": "Your position and facing direction stay fixed. How does the sound source's direction change during the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "from right to left"
        },
        {
          "letter": "B",
          "text": "remains unchanged"
        },
        {
          "letter": "C",
          "text": "from left to right"
        }
      ],
      "promptSha256": "9f82408bad974c9cafcdace8c2ff52fc782388edcd660c50bd08265c3e1fdf68",
      "directForA": false,
      "clips": [
        {
          "file": "clips/4802135c084227ab.wav",
          "sha256": "ec4c03a4e197b056b248c88353868e33a7f69ed637f4f598270cae010bdf70c7",
          "view": "direct_binaural"
        },
        {
          "file": "clips/a45504424b7b439d.wav",
          "sha256": "b2d9cc0e16f2ddb91d48cc334da7d9165bd0da6085db8b7c9c5ee232f9f888c9",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_3ea2c53f9ee8453bfc32884c",
      "subtype": "translation_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. You moved 3.7 metres between the recordings. Loudness depends only on the distance between you and the sound source.",
      "question": "The source stayed in one place. Recording 1 was made before you moved and Recording 2 after. Compared with Recording 1, is the source closer, farther away, or at about the same distance from you in Recording 2?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Approximately the same distance"
        },
        {
          "letter": "B",
          "text": "Closer"
        },
        {
          "letter": "C",
          "text": "Farther away"
        }
      ],
      "promptSha256": "3be6a7fd849922b9b43f32d1534784d3a3fc7817425a33989d54be572c9977ad",
      "directForA": true,
      "clips": [
        {
          "file": "clips/e8390b21d6d65d2c.wav",
          "sha256": "2975424db6414d90949d4ff9c68b7ff153f4fd7abaddef120acd5a09cee1f0be",
          "view": "direct_binaural"
        },
        {
          "file": "clips/a35dace75eaf9270.wav",
          "sha256": "55bf86fe8074143d80eba9c8db81af3bc0c518cf5cf46e9d1787fdd2e97ad5e5",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_1a6abd3dc49c7a1ed99cb2c9",
      "subtype": "joint_direction_change_causes_multi_select",
      "format": "multiple_select",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 6 seconds in the supplied audio.\n\nThis is one continuous recording. In every option, you stay in the same place, and the source stays at ear level, 0.55 m from you. Each option is a separate scene in which the source starts directly in front of you. In each scene, only the stated movement happens: a steady 60-degree turn or circular movement lasting the whole recording.",
      "question": "Listen to the recording. Each option describes a separate possible scene. Which scenes could produce the same changes in sound direction as this recording? Select all that apply. Judge each option on its own; do not combine the selected scenes.",
      "instruction": "Return the letters of all correct options.",
      "options": [
        {
          "letter": "A",
          "text": "You stay still while the source moves to your right along a horizontal circle around you."
        },
        {
          "letter": "B",
          "text": "The source stays fixed while you turn your head to the right."
        },
        {
          "letter": "C",
          "text": "You stay still while the source moves to your left along a horizontal circle around you."
        },
        {
          "letter": "D",
          "text": "The source stays fixed while you turn your head to the left."
        }
      ],
      "promptSha256": "a4db78120ccc46fe58523b8597bdd4e35b3d82adec41b002225675b55be542e3",
      "directForA": false,
      "clips": [
        {
          "file": "clips/713ed1315e3a86b2.wav",
          "sha256": "aed289f029bbf48343aa062265d9fe32f5e9404f447bd354d3be0623683b136f",
          "view": "direct_binaural"
        },
        {
          "file": "clips/e061e9601902e015.wav",
          "sha256": "e2e33d2522bf35de6d8e3d3f6bd2189e4bc8ffc7a9fdf999db726295a181814a",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_baca061cb1570a27e2d49881",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your left without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "ce82ef293e6612cac50f5e71614bbf333b75d0f364af9d336a1a452f462b47d8",
      "directForA": true,
      "clips": [
        {
          "file": "clips/91be83d23be179a7.wav",
          "sha256": "9f53d953e42a98b47a3da5d44b176841ded1878de675e9823caef7bf92d37f4f",
          "view": "direct_binaural"
        },
        {
          "file": "clips/6baa7f5640a2efb2.wav",
          "sha256": "f3c5a0174bbcf84aeee37f09296602fb3f4e0c4d7e4540c76b52f40e00182b64",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_3cd30ff322d67bf1aea4c047",
      "subtype": "source_direction_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording.",
      "question": "Your position and facing direction stay fixed. How does the sound source's direction change during the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "from right to left"
        },
        {
          "letter": "B",
          "text": "remains unchanged"
        },
        {
          "letter": "C",
          "text": "from left to right"
        }
      ],
      "promptSha256": "9f82408bad974c9cafcdace8c2ff52fc782388edcd660c50bd08265c3e1fdf68",
      "directForA": true,
      "clips": [
        {
          "file": "clips/a5204cf82db211d8.wav",
          "sha256": "4b46f02d50467388c7ffd4ec012c5b0d5408fa83ef5d0ccb11cff2aa175ba54c",
          "view": "direct_binaural"
        },
        {
          "file": "clips/e3540f38c58fa823.wav",
          "sha256": "a21ee9b7c55df573de5125b869d5507b488266cdaa63f57c564ffd93b596760d",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_d7949e519f8a81bc04c368a5",
      "subtype": "static_up_down",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe recording contains a single clearly audible sound source. The sound source remains stationary, and your position and facing direction remain fixed throughout the recording.",
      "question": "Is the sound source above ear level, below ear level, or at about ear level?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Below ear level"
        },
        {
          "letter": "B",
          "text": "At about ear level"
        },
        {
          "letter": "C",
          "text": "Above ear level"
        }
      ],
      "promptSha256": "dbf3f9a6de80891987d327bf0dfaf3d7535439a94e7e3c43087c926f8c3c86eb",
      "directForA": false,
      "clips": [
        {
          "file": "clips/4593ce7d9177ab4b.wav",
          "sha256": "a2560209e596b543e663aca5ede97e2cd4e77ef8576145b8b333b3c4aee3791f",
          "view": "direct_binaural"
        },
        {
          "file": "clips/0652d05791c590eb.wav",
          "sha256": "9ac39fb4a1a65702a29907dcd8c0597940cc3a0163d0373723f076259b2856af",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_0d65ce8d33ab87f8f5d8707d",
      "subtype": "count_direction_reversals",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording.",
      "question": "The source stayed in one place. Initially, it was directly in front of you at ear level. You moved along a straight line on your left–right axis, without pausing or changing the direction you were facing. How many times did you reverse the direction of your movement?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Once"
        },
        {
          "letter": "B",
          "text": "Twice"
        },
        {
          "letter": "C",
          "text": "Zero times"
        }
      ],
      "promptSha256": "69061103e5f5dd34a61dbdb4b66cca2d20d99c35c38edd0899179ac7d335f6e9",
      "directForA": true,
      "clips": [
        {
          "file": "clips/8343ec19a1d4cb6a.wav",
          "sha256": "800f02be5dd166f89df54b0b1d5da85b6878d68b4e3785125e8a488b76028260",
          "view": "direct_binaural"
        },
        {
          "file": "clips/fa1f34f2e3cac0e3.wav",
          "sha256": "8804607d98aaebfd90fee0283f21c975904becd6af6968d7a26103e1dd3fa590",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_91e18628541d06e57478918c",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your left without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "ce82ef293e6612cac50f5e71614bbf333b75d0f364af9d336a1a452f462b47d8",
      "directForA": false,
      "clips": [
        {
          "file": "clips/58b5a567196b156e.wav",
          "sha256": "b49082a7ba08ce2e376261dee76c11f172274b31cb953e03ed71a96a8c44a36a",
          "view": "direct_binaural"
        },
        {
          "file": "clips/41dacefb1dd483e0.wav",
          "sha256": "5caae2b87dafca29e47315e26ac0ae6164b203769976aef3258a7249cb8c3a87",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_9d1c152138bcc6ecde1c869b",
      "subtype": "static_left_right",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe sound source remains stationary throughout the recording.",
      "question": "Is the sound source on your left or on your right?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Right"
        },
        {
          "letter": "B",
          "text": "Left"
        }
      ],
      "promptSha256": "eadefbd41bf7059bd9e6c310ea4367caad27ae44f6c0f7a366404021be6988f0",
      "directForA": false,
      "clips": [
        {
          "file": "clips/a9953fc5287e4d6f.wav",
          "sha256": "681eabd1271d9838b7e85cff7764ae4b0c0b5bcf1c652fe8f1b99a6bcce602b0",
          "view": "direct_binaural"
        },
        {
          "file": "clips/b7ef45df4f73d6b5.wav",
          "sha256": "8332b577a0fe8e07e4cc1c243f02e1f92b66dd3209a1e359c59f530e623a9799",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_810d2c1841d14590475807c4",
      "subtype": "match_after_translation",
      "format": "single_choice",
      "setup": "Loudness depends only on the distance between you and the sound source.",
      "question": "The source stayed in one place. Reference was recorded before you moved. You moved 5.4 m backward without turning or changing height. Which candidate recording, Candidate 1 or Candidate 2, could have been made after the move?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 1"
        },
        {
          "letter": "B",
          "text": "Candidate 2"
        }
      ],
      "promptSha256": "69185fabc0f060bddb33fd0d39523e3e6da6caeaf60dfa4af706f9138bce0731",
      "directForA": true,
      "clips": [
        {
          "file": "clips/b711bfb91ba4616f.wav",
          "sha256": "501b045b3fc795ea6c0679d7b25867336ab6d9f09636f28651c42c73a67e2b59",
          "view": "direct_binaural"
        },
        {
          "file": "clips/0d4a8e550ba577de.wav",
          "sha256": "a6afb61d5666638f17e92576f9594605ac3ea84b909f8037d3de7583dd9e8df5",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Reference",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Candidate 1",
          "start_s": 4,
          "end_s": 7
        },
        {
          "label": "Candidate 2",
          "start_s": 7,
          "end_s": 10
        }
      ]
    },
    {
      "id": "q_35fb96a47c336d0370806a24",
      "subtype": "match_timed_movement_audio",
      "format": "single_choice",
      "setup": "Each recording has its own timeline, starting at 0 seconds.\n\nEach candidate is one continuous recording. Initially, the source is 0.55 m directly in front of you at ear level. You kept facing the same direction and stayed at the same height. From 0 to 2.5 seconds, you moved 0.55 m to the left. From 2.5 to 5 seconds, you moved 0.55 m to the right.",
      "question": "The source stayed fixed. Which recording matches the two movements shown on the timeline?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 2"
        },
        {
          "letter": "B",
          "text": "Candidate 1"
        }
      ],
      "promptSha256": "3544f0eee7a39a18aa2b8461217e22d1224bd156bdb74a1013aab690bf583b71",
      "directForA": false,
      "clips": [
        {
          "file": "clips/228fedc698467dc6.wav",
          "sha256": "7eb9105e387b0e341137b91ca72b12cc853fd95d3186f6601c00e9ba640ebbc0",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1085c6372060b3a3.wav",
          "sha256": "0ade2dbc0ae741ca82eaea5382c5425adfcb10758039ab4505b5a072c2c39e71",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Candidate 1",
          "start_s": 0.0,
          "end_s": 5.0
        },
        {
          "label": "Candidate 2",
          "start_s": 5.0,
          "end_s": 10.0
        }
      ]
    },
    {
      "id": "q_5d3c79f788dc404c5734b9f6",
      "subtype": "source_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThis is one continuous recording. Loudness depends only on the distance between you and the sound source.",
      "question": "Your position and facing direction stay fixed. Compared with the beginning, is the source closer, farther away, or at approximately the same distance at the end?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Closer"
        },
        {
          "letter": "B",
          "text": "Farther away"
        },
        {
          "letter": "C",
          "text": "Approximately the same distance"
        }
      ],
      "promptSha256": "a86785af035cbe26a41f1a95c7c1ee65f1ec06f5e8d31a7fc225c9f2a442370d",
      "directForA": false,
      "clips": [
        {
          "file": "clips/2c8e33ff7e2ae8d4.wav",
          "sha256": "7d02a066bbb00c1ad69ca5ef3f8a54bc1476ce26e498450dc4cf7a9cc801309a",
          "view": "direct_binaural"
        },
        {
          "file": "clips/bf8b06b61d0dfaa6.wav",
          "sha256": "9906ee6a29959a0cc47cbfdbfa725169ca62cffd47673dd72174a6b6b8f7b786",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_ecdf70e57c5008bf83ecc6cf",
      "subtype": "translation_compatibility",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You moved 1.27 m to your right in a straight line while keeping the same facing and ear height. Recording 1 is before the move. Recording 2 is after. The source may have stayed still or moved between recordings. If the source stayed still, it would sound noticeably farther away in Recording 2. Does the distance change you hear match that prediction?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "72111410955de89fd0e18f2de66bcee7acea75d6c7c3fe96cfd2a3356f70051d",
      "directForA": false,
      "clips": [
        {
          "file": "clips/ea9f9fb789c29f93.wav",
          "sha256": "7757c10f4af4bc43e491b27700f6b6664260dcebbbfabd4bc24eb90b6997bfb1",
          "view": "direct_binaural"
        },
        {
          "file": "clips/a98d5fa13a57c5aa.wav",
          "sha256": "1d926106ba1e6b712ad1a0089495c113d85898569f9d6b2f604144013a4a2f44",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_fadc8f3381855a24688d483c",
      "subtype": "static_up_down",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe recording contains a single clearly audible sound source. The sound source remains stationary, and your position and facing direction remain fixed throughout the recording.",
      "question": "Is the sound source above ear level, below ear level, or at about ear level?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Above ear level"
        },
        {
          "letter": "B",
          "text": "Below ear level"
        },
        {
          "letter": "C",
          "text": "At about ear level"
        }
      ],
      "promptSha256": "869286223e5cd2b1e8c9d5e2afd720fec55cb99c404730a99bb3e0b619d82b2b",
      "directForA": true,
      "clips": [
        {
          "file": "clips/d2129cfc75556f82.wav",
          "sha256": "6168abe6b4bfa59da1076764467ca787787349664c3cd9809debc874c7f5e84f",
          "view": "direct_binaural"
        },
        {
          "file": "clips/9fc445899261bb2b.wav",
          "sha256": "9acde3b771d0a7df5bfd75791d52fad1ff627f7b663e535d093b95f8c5a45075",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_762723799eb10b91cc879099",
      "subtype": "joint_direction_change_causes_multi_select",
      "format": "multiple_select",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 6 seconds in the supplied audio.\n\nThis is one continuous recording. In every option, you keep facing the same direction. Initially, the source is 1.15 m directly in front of you at ear level. The same sound is played at a fixed gain in every option. The moving person or source travels the distance given in that option in a straight line throughout the recording, without reversing.",
      "question": "Listen to the recording. Each option describes a separate possible scene. Which scenes could produce the same change in the source's distance from you as this recording? Select all that apply. Judge each option on its own; do not combine the selected scenes.",
      "instruction": "Return the letters of all correct options.",
      "options": [
        {
          "letter": "A",
          "text": "You stay still while the source moves straight forward, in the direction you are facing. The movement covers 3.25 m."
        },
        {
          "letter": "B",
          "text": "You stay still while the source moves straight backward, opposite to the direction you are facing. The movement covers 0.14 m."
        },
        {
          "letter": "C",
          "text": "The source stays fixed while you move straight backward without turning. The movement covers 3.25 m."
        },
        {
          "letter": "D",
          "text": "The source stays fixed while you move straight forward without turning. The movement covers 0.14 m."
        }
      ],
      "promptSha256": "30d26dae6e2199788eebdf5e9bd964f0b42035768e7f2e48669a984ed04f1b66",
      "directForA": true,
      "clips": [
        {
          "file": "clips/85cdeab883bc13d4.wav",
          "sha256": "6ba7fc82ff50084df0c0b615ed3ee5ca7ffa1c85a70f9b2fac22e643b822e086",
          "view": "direct_binaural"
        },
        {
          "file": "clips/db88ccf45e2cd4d3.wav",
          "sha256": "302a35eef899ade04d40a24ace18333077443e7448339e3af2212209444e8360",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_e226190af3dfd8a2d6a695f4",
      "subtype": "infer_movement_timing",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\nTimes start at 0 seconds in this recording.\n\nThis is one continuous recording. Initially, the source is 0.55 m directly in front of you at ear level.",
      "question": "The source stayed in one place. You stayed in the same position and made two horizontal head turns, each to the left or right. You moved continuously throughout the recording, with no pauses. Which timeline matches the two movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "You turned your head left from 0 to 3.5 s, then you turned your head right from 3.5 to 10 s."
        },
        {
          "letter": "B",
          "text": "You turned your head left from 0 to 6.5 s, then you turned your head right from 6.5 to 10 s."
        }
      ],
      "promptSha256": "661ffaa2f53f42edcb659380c34474bb253e9645d8bba48ba833a1b2307b84e9",
      "directForA": true,
      "clips": [
        {
          "file": "clips/dc197340c5185785.wav",
          "sha256": "915f9ca5ae9b76d28c26d384aeacccc339b68ea77d33c1e3d42a1607128e53b6",
          "view": "direct_binaural"
        },
        {
          "file": "clips/691a28057ccf7ac4.wav",
          "sha256": "9a8f8e3786fe5a7e8fdeb3cd8d8f09e3640dd8eb4c024a770f3dce674cd34982",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_47efe823b5ff0ae17aadf725",
      "subtype": "source_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThis is one continuous recording. Loudness depends only on the distance between you and the sound source.",
      "question": "Your position and facing direction stay fixed. Compared with the beginning, is the source closer, farther away, or at approximately the same distance at the end?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Farther away"
        },
        {
          "letter": "B",
          "text": "Approximately the same distance"
        },
        {
          "letter": "C",
          "text": "Closer"
        }
      ],
      "promptSha256": "a39f51fc824ebc4f589de5b639b543dc1057bca7f63356926b8ce4b9cf130dc7",
      "directForA": false,
      "clips": [
        {
          "file": "clips/d7880d29cde2a691.wav",
          "sha256": "ea2c3a2449b3721f584b966769909516e19d2bc9f822f6dad1d4d4bfc9ff5aa5",
          "view": "direct_binaural"
        },
        {
          "file": "clips/d77313e25c8ffae1.wav",
          "sha256": "78c27191c23f30a9019da3a83918360fec76c92f951f31091a26db5e7b3f1b00",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_7c79bb3ce6d34e17f7e207e7",
      "subtype": "source_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThis is one continuous recording. Loudness depends only on the distance between you and the sound source.",
      "question": "Your position and facing direction stay fixed. Compared with the beginning, is the source closer, farther away, or at approximately the same distance at the end?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Closer"
        },
        {
          "letter": "B",
          "text": "Farther away"
        },
        {
          "letter": "C",
          "text": "Approximately the same distance"
        }
      ],
      "promptSha256": "a86785af035cbe26a41f1a95c7c1ee65f1ec06f5e8d31a7fc225c9f2a442370d",
      "directForA": true,
      "clips": [
        {
          "file": "clips/36d61869bb8624f4.wav",
          "sha256": "62737bf46e4bd01dccfd5297311f8dc6d5d410a63e0ac60f6751566e77e7baf4",
          "view": "direct_binaural"
        },
        {
          "file": "clips/31d942c8afba03f3.wav",
          "sha256": "3bcdb6130d313cdb6ba2c34a46e70e7efc03b76c48894336bef79b61ef143fa7",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_284faf7a0dc9447c137c1938",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your left without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "ce82ef293e6612cac50f5e71614bbf333b75d0f364af9d336a1a452f462b47d8",
      "directForA": true,
      "clips": [
        {
          "file": "clips/235d3c5b9bba12bb.wav",
          "sha256": "54a076e158df6ff1bb91b42c586a9bcd475ac3c78dfc15cdad759ebca9beef49",
          "view": "direct_binaural"
        },
        {
          "file": "clips/79c227cad2455fe3.wav",
          "sha256": "31299684c9c6435422a64204758366f20673cd09ceb41669c2ab409a94f5d87f",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_f7a58bb92a0a79e9713827e4",
      "subtype": "translation_compatibility",
      "format": "open",
      "setup": "The supplied audio contains two separate static observations. Loudness depends only on the distance between you and the sound source.",
      "question": "You moved 0.99 m to your left in a straight line without turning or changing height. Recording 1 is before the move; Recording 2 is after. In Recording 1, the source is 1.54 m from you at ear level. The source may have stayed still or moved between Recording 1 and Recording 2. Answer all questions in order.\n1. Where do you hear the sound in each recording, and how does the distance between you and the source compare?\n2. If the source stayed still, where would you hear it in Recording 2, and would it be closer, farther away, or at the same distance?\n3. Does that prediction match what you actually hear in Recording 2?\n4. State whether your move alone is enough, or whether source movement is also needed.",
      "instruction": "Answer all numbered questions in their presented order using short English sentences. No fixed sentence count is required.",
      "options": [],
      "promptSha256": "663e058bd703fe633be1f4bbe6e60b859093b1bd34cf309bbd8ab07ac342e128",
      "directForA": false,
      "clips": [
        {
          "file": "clips/296b10341b0c86be.wav",
          "sha256": "b55cd37a8512a43541bc0410782bde3feca460ca30ebe08d847f7393b8e95ddf",
          "view": "direct_binaural"
        },
        {
          "file": "clips/a939a32dffd41963.wav",
          "sha256": "fe675d5e9165aa5e559f7b4ff7fa66d424d79e83d60c9d0158c08c7716427748",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_992e2d02ecdce6cbe973788a",
      "subtype": "match_joint_motion_audio",
      "format": "single_choice",
      "setup": "Each candidate is one continuous recording.",
      "question": "Initially, the source is 0.55 m directly in front of you at ear level. You stay in the same position and turn your head 90 degrees to your left. At the same time, the source moves 45 degrees around you in the same direction as your turn, staying at the same height and distance from you. Both movements happen at steady speeds throughout each candidate recording. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear during these movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 1"
        },
        {
          "letter": "B",
          "text": "Candidate 2"
        }
      ],
      "promptSha256": "3031eaa25946a66433c95cc91193a74c5af91969d373a525e1fed0ba425424ef",
      "directForA": true,
      "clips": [
        {
          "file": "clips/e459f3a62b7bf96f.wav",
          "sha256": "64f13ec2e2e4bf5a6d47b14fa6500d63e597330184698cfa92a3fb560a73a122",
          "view": "direct_binaural"
        },
        {
          "file": "clips/0cbb558403e721a1.wav",
          "sha256": "51d578e2fe689da26d89b49755aaca726e2b4b038319931e66466b4e96d85854",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Candidate 1",
          "start_s": 0.0,
          "end_s": 5.0
        },
        {
          "label": "Candidate 2",
          "start_s": 5.0,
          "end_s": 10.0
        }
      ]
    },
    {
      "id": "q_ccf2d490a32c27f9d95524d2",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your right without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "7273040a9796d3844d402c112481603116f68cca6eb96ce228d44e04ef615309",
      "directForA": true,
      "clips": [
        {
          "file": "clips/753bf08c68ee2646.wav",
          "sha256": "18e9ae8e5de6f83916cfa9bfeb880ab48fc60f3ace869c4f8a31bd153b5a77b3",
          "view": "direct_binaural"
        },
        {
          "file": "clips/328882d7de25f498.wav",
          "sha256": "9ed0569f0ecf9f7f1a958a2f5d32d6fa22baa491ab411b4e47b940dc7ed742c1",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_aab2e5b1ed5d3067846c74c2",
      "subtype": "static_relative_distance",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Your position and facing direction are the same in both recordings. The same source stays still during each recording and is heard from the same direction. Loudness depends only on the distance between you and the sound source.",
      "question": "Does the source sound closer in Recording 1, closer in Recording 2, or at about the same distance?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Closer in Recording 2"
        },
        {
          "letter": "B",
          "text": "Closer in Recording 1"
        },
        {
          "letter": "C",
          "text": "About the same distance"
        }
      ],
      "promptSha256": "1464b841dc5e811ca06d289bfcecbbc2969b91498013832c30900e84d7a46615",
      "directForA": true,
      "clips": [
        {
          "file": "clips/85dfff61bf777b8e.wav",
          "sha256": "fb5d4f6a8a3f566444728ba8358b0815b4aac2204bbbf834ea866af5133b6d66",
          "view": "direct_binaural"
        },
        {
          "file": "clips/53306516c8ca2363.wav",
          "sha256": "e5223426f2778e8b965bba90c1bb61a33333856b1e583ca467bfc61a214c7d40",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_07f9d1cab20b77525a1dcada",
      "subtype": "count_direction_reversals",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording.",
      "question": "The source stayed in one place. Initially, it was directly in front of you at ear level. You turned your head horizontally without pausing or changing position. How many times did you reverse the direction of your turn?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Once"
        },
        {
          "letter": "B",
          "text": "Twice"
        },
        {
          "letter": "C",
          "text": "Zero times"
        }
      ],
      "promptSha256": "b72bce780d7ff02bb550067570fb05613b864321d47ce53d73dd0509627bd212",
      "directForA": false,
      "clips": [
        {
          "file": "clips/6aeb19f85f2e32a9.wav",
          "sha256": "4215b54a8b5e2ba4f7d3ba99602cc1d665f8ac379f51c7d30e5e177f567321ed",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1b925775a24fff9b.wav",
          "sha256": "21fe0d4f486cf6aca145b575848d9e036911338ffdc38fff2df3f10fd870b78d",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_fb8c7d8cb9cebf1c9a407101",
      "subtype": "infer_movement_order",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\n\nThis is one continuous recording. Initially, the source is 0.52 m directly in front of you at ear level.",
      "question": "The source stayed in one place. You kept facing the same direction and stayed at the same height. You made two straight moves on the horizontal plane. Each move was forward, backward, left, or right. Which order of the two movements matches the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "You moved right, then you moved left."
        },
        {
          "letter": "B",
          "text": "You moved left, then you moved right."
        }
      ],
      "promptSha256": "12ed7dd5ea6ac1345b542cbd788516aae850e74fc6e982dd05a462d2c3885f34",
      "directForA": false,
      "clips": [
        {
          "file": "clips/a3eb34d01794cd55.wav",
          "sha256": "96ad7f8cadd475d06b3a297910b6b517936f5c458c8a764f342587f32f824217",
          "view": "direct_binaural"
        },
        {
          "file": "clips/7741b0e947b0bd87.wav",
          "sha256": "bfd480f18e1947e336da0aca89f3031154f10dfb031286e7a0098076d6bbbefa",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_c3615f1aa905ed41746a975a",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your right without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "7273040a9796d3844d402c112481603116f68cca6eb96ce228d44e04ef615309",
      "directForA": true,
      "clips": [
        {
          "file": "clips/2e252189c931379f.wav",
          "sha256": "1f0f7745977bc8935a737e2d1f4d431b2aac86403ba17fb66b4b3813ec6b87ac",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1a884fdf9adb7c69.wav",
          "sha256": "693c6da4a5f891297230fa65b046c967ffd9b36d7496151ae71c51e2e68ab020",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_dbe5c324e931ad2e5c254520",
      "subtype": "compensate_head_turn",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your left without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your head turn alone explain the sound directions in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "ce82ef293e6612cac50f5e71614bbf333b75d0f364af9d336a1a452f462b47d8",
      "directForA": false,
      "clips": [
        {
          "file": "clips/75796d1a52a5ade5.wav",
          "sha256": "ea9a3900d72cc915e970331bd8062221a14419ec46be41f4e7ab0bccb42636d2",
          "view": "direct_binaural"
        },
        {
          "file": "clips/274f758cfd328941.wav",
          "sha256": "cd6343784cf2b33f53ef0d85229106e0317a8642837eb2237613e21840101cc3",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_f5f032df929479fa4baaf52f",
      "subtype": "match_joint_motion_audio",
      "format": "single_choice",
      "setup": "Each candidate is one continuous recording. Loudness depends only on the distance between you and the sound source. Source emission level is constant and all clips use one shared gain.",
      "question": "Initially, the source is 0.55 m directly in front of you at ear level. You move 0.8 m to your right without turning or changing height. At the same time, the source moves 4 m in the same direction as your move, staying at ear level. Both movements happen at steady speeds throughout each candidate recording. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear during these movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 2"
        },
        {
          "letter": "B",
          "text": "Candidate 1"
        }
      ],
      "promptSha256": "849c58591a2005518d1a4d502281f3e445545f58e9bfbc8f932fcf4028a187e8",
      "directForA": false,
      "clips": [
        {
          "file": "clips/cb630968aa1dd073.wav",
          "sha256": "ff16b94b1bb5d1fb57623dd718081d92747bc566ffc10defcfd04979ea0b58d9",
          "view": "direct_binaural"
        },
        {
          "file": "clips/5b02ac224ded1f9c.wav",
          "sha256": "5b09b12c2f60602bba9d86698cf11f09c93b25b8f81979f65df75fb185ac2c7c",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Candidate 1",
          "start_s": 0.0,
          "end_s": 5.0
        },
        {
          "label": "Candidate 2",
          "start_s": 5.0,
          "end_s": 10.0
        }
      ]
    },
    {
      "id": "q_47a14f4ec79746ba71be403d",
      "subtype": "static_relative_distance",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Your position and facing direction are the same in both recordings. The same source stays still during each recording and is heard from the same direction. Loudness depends only on the distance between you and the sound source.",
      "question": "Does the source sound closer in Recording 1, closer in Recording 2, or at about the same distance?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "About the same distance"
        },
        {
          "letter": "B",
          "text": "Closer in Recording 2"
        },
        {
          "letter": "C",
          "text": "Closer in Recording 1"
        }
      ],
      "promptSha256": "e6458a0aff724c3e1a5acae0dcdb2f41dc9067def1ba7e4ac0b30f892c28bec1",
      "directForA": false,
      "clips": [
        {
          "file": "clips/582ccc3d19afd03c.wav",
          "sha256": "dc640e514cab6adb76670dba37497602d983dbbda36f902080ec99b3bf013869",
          "view": "direct_binaural"
        },
        {
          "file": "clips/70dfbfc1f9c2d069.wav",
          "sha256": "241ee0240c739273c555a1db4e5f412360094db6b129829fe9394ce5b1ad8f89",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_88a9ac4a55f4714eac8e8cea",
      "subtype": "infer_translation",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "The source stayed fixed. You moved in a straight line at the same height without turning. You did not move diagonally. Recording 1 is before the move; Recording 2 is after. In which direction did you move?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Straight to your right"
        },
        {
          "letter": "B",
          "text": "Straight backward"
        },
        {
          "letter": "C",
          "text": "Straight forward"
        },
        {
          "letter": "D",
          "text": "Straight to your left"
        }
      ],
      "promptSha256": "b9d41ba20f95586efdf609dc0cfa74a31070938072e2d7c0abd28cfa19b02148",
      "directForA": true,
      "clips": [
        {
          "file": "clips/6837713b92fef4f4.wav",
          "sha256": "73777fd1e0ae4b62e82e64e7d18eb2e9b16f02e5682cb1b34a9d1b21868a96fe",
          "view": "direct_binaural"
        },
        {
          "file": "clips/e8699804c48c2842.wav",
          "sha256": "068781804c108a3167d502385510697455cab3e3f9aad702df0f3d6561ae7d94",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_d9cb19d1a861b585c25680e0",
      "subtype": "static_relative_elevation",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Each recording contains a single clearly audible sound source. The sound source remains stationary throughout each recording. You keep the same position and facing direction throughout both recordings. Both recordings use the same sound. Each recording is a separate static observation. The source is the same distance from you in both recordings.",
      "question": "Compare the sound direction in Recording 1 and Recording 2. Does the sound come from higher up in Recording 1, higher up in Recording 2, or about the same height?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "About the same height"
        },
        {
          "letter": "B",
          "text": "Higher in Recording 1"
        },
        {
          "letter": "C",
          "text": "Higher in Recording 2"
        }
      ],
      "promptSha256": "8b5b7252211b7251335af417b96682ac1947f4c279d33b3ae63cbc25862ae8ae",
      "directForA": true,
      "clips": [
        {
          "file": "clips/222a5fe7ecc6631c.wav",
          "sha256": "76a11aea9900b4d22446b97da9b76cb86dbc31355ae920f949467172fd55514e",
          "view": "direct_binaural"
        },
        {
          "file": "clips/5b8c2f0c7b3b8329.wav",
          "sha256": "4c93cd8989b4ae9848d54e18662727bf199d06ae5acf295a0da8b40242110f52",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Recording 1",
          "start_s": 0,
          "end_s": 4
        },
        {
          "label": "Recording 2",
          "start_s": 4,
          "end_s": 8
        }
      ]
    },
    {
      "id": "q_31035d2a049c76f6e333b1c1",
      "subtype": "source_direction_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording. Consider the direction above or below you.",
      "question": "Your position and facing direction stay fixed. How does the sound source's direction change during the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "from above to below"
        },
        {
          "letter": "B",
          "text": "from below to above"
        },
        {
          "letter": "C",
          "text": "remains unchanged"
        }
      ],
      "promptSha256": "97430d559f3d7e2319141b1c750b961a3e16dc9efadf3aa3a56c77cf8e1c65a2",
      "directForA": true,
      "clips": [
        {
          "file": "clips/273580f13f90b586.wav",
          "sha256": "06ed0e1318f7517489af4755ae7e391fedd1e5a352c0d2b05a34db6667759b92",
          "view": "direct_binaural"
        },
        {
          "file": "clips/9b437546ec56a8af.wav",
          "sha256": "757449c9ceecd843344cfdcdd9eda0495809a37256318077d7b0a798516b0bfc",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_6b6b6bf398aa04a453673f96",
      "subtype": "describe_spatial_changes_over_time",
      "format": "open",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\nTimes start at 0 seconds in this recording. This is one continuous recording.\n\nThe source stayed fixed. Initially, the source is 0.55 m directly in front of you at ear level. You made two horizontal head turns without changing position. Stage 1: 0 to 6 s. Stage 2: 6 to 10 s.",
      "question": "Describe how the sound direction changes during Stage 1 and Stage 2.",
      "instruction": "Answer both stages in order.",
      "options": [],
      "promptSha256": "9bead4cbd28c1421712928bf14a9dcfbdaf37cf8b443af72c0d09d3f1eae83e4",
      "directForA": true,
      "clips": [
        {
          "file": "clips/de17d0aaac595dd3.wav",
          "sha256": "b69512c11728fa11645dd103b964fcff1c115fbe3ff557385df320ae92966903",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1f2992063184661e.wav",
          "sha256": "1aad7eed30c049e632ad0d0ed24826a33084213ea36f1647491fcea46216634d",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_fc78fbcc7c199dd65937e3ad",
      "subtype": "match_joint_motion_audio",
      "format": "single_choice",
      "setup": "Each candidate is one continuous recording. Loudness depends only on the distance between you and the sound source. Source emission level is constant and all clips use one shared gain.",
      "question": "Initially, the source is 0.55 m directly in front of you at ear level. You move 0.8 m to your left without turning or changing height. At the same time, the source moves 0.4 m in the same direction as your move, staying at ear level. Both movements happen at steady speeds throughout each candidate recording. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear during these movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Candidate 1"
        },
        {
          "letter": "B",
          "text": "Candidate 2"
        }
      ],
      "promptSha256": "cbf97e38b67e2d97d2f64402ba7897f1468eb5295a5d54d8d26f0e4506e6540a",
      "directForA": true,
      "clips": [
        {
          "file": "clips/779fa07983fe7b6f.wav",
          "sha256": "8c36edafc2e4c9ed5ea2df8bead6db27f8a6813929cb9547c6a017c54b5ebc12",
          "view": "direct_binaural"
        },
        {
          "file": "clips/e0c72b50a795bb59.wav",
          "sha256": "62fd430a3d6ae1a9c265db0a5d833cb354beb9eefc476cf5eccf5380a1d84ed2",
          "view": "reverberant_binaural"
        }
      ],
      "segments": [
        {
          "label": "Candidate 1",
          "start_s": 0.0,
          "end_s": 5.0
        },
        {
          "label": "Candidate 2",
          "start_s": 5.0,
          "end_s": 10.0
        }
      ]
    }
  ]
};
