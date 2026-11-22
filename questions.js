window.LISTENING_STUDY = {
  "study": "aws-listening-paired120-20261121-v1",
  "release": "0f2cae952769aa5d16fdf4606a1130e9480856701fe68ade0258d151004b8645",
  "questions": [
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
      "directForA": true,
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
      "id": "q_3f2f717b4c792dd96aad4431",
      "subtype": "joint_rotation_source_direction",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Each recording contains a single clearly audible sound source at ear level, at the same distance from you in both recordings.",
      "question": "Recording 1 was made before the movements and Recording 2 after them. In between, you turned your head 90 degrees to your left without changing position. The source also moved horizontally around you during the turn, in one direction by at most 90 degrees, without reversing. Did the source move around you in the same direction as your head turn or in the opposite direction?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "In the same direction as your head turn"
        },
        {
          "letter": "B",
          "text": "In the opposite direction to your head turn"
        }
      ],
      "promptSha256": "c464830ab64129dbe5b43d48cee2482c9bdfd52b009120a4ec7b28b93071a217",
      "directForA": true,
      "clips": [
        {
          "file": "clips/6c12244bf2c2557d.wav",
          "sha256": "7caf354bb7e56621b7b8c68e17e4a3500b28a8e7653b61aa6daff31366371000",
          "view": "direct_binaural"
        },
        {
          "file": "clips/390bba6e4f928752.wav",
          "sha256": "8a10ba74df6c20a65cdc6c5637417778676c20210b2f6b378eaa25253049333a",
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
      "id": "q_0c4c6a14f9193d42d1dbb066",
      "subtype": "compensate_head_turn",
      "format": "open",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your right without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Answer all questions in order.\n1. Where do you hear the sound in each recording?\n2. If the source stayed still, where would you hear it in Recording 2?\n3. Does that prediction match what you actually hear in Recording 2?\n4. State whether your head turn alone is enough, or whether source movement is also needed.",
      "instruction": "Answer all numbered questions in their presented order using short English sentences. No fixed sentence count is required.",
      "options": [],
      "promptSha256": "6f1758d940bcef3975a9f08da0b53abae4baf77b97323fb1c81d67cb3bb483ac",
      "directForA": false,
      "clips": [
        {
          "file": "clips/f80aadb6f7d209a7.wav",
          "sha256": "b884c7eb6fee54d0d00db945193ee3730d76c26740a693dcc3b5f110a6582b07",
          "view": "direct_binaural"
        },
        {
          "file": "clips/4fe1a4f39fd5dd37.wav",
          "sha256": "47673441c0b986113abcef8f5e3cd83c92f41e61f9a0383ce5bda361ccf9135a",
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
      "id": "q_a5f03ec5aa7391b25e33bc4a",
      "subtype": "match_after_translation",
      "format": "single_choice",
      "setup": "",
      "question": "The source stayed in one place. Reference was recorded before you moved. You moved 0.55 m diagonally backward and to your right without turning or changing height. Which candidate recording, Candidate 1 or Candidate 2, could have been made after the move?",
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
      "promptSha256": "6277bb6df0a8a3176a572710bb1e1f08a656ac89c48c9ace4b6e4eefb5db1131",
      "directForA": false,
      "clips": [
        {
          "file": "clips/ed32a560a6c1f1b3.wav",
          "sha256": "cce15cc708c7bb0163d397cc56433069b1f58b084460246c2a0273073530cd67",
          "view": "direct_binaural"
        },
        {
          "file": "clips/5785ca188b2be3e1.wav",
          "sha256": "ae70659b9655f6ab11e322d38741a5aaf6da4f5200580544029c7c9dbea33312",
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
      "id": "q_ba6c3b610f10695f62d9d9c8",
      "subtype": "translation_compatibility",
      "format": "open",
      "setup": "The supplied audio contains two separate static observations. Loudness depends only on the distance between you and the sound source.",
      "question": "You moved 1.78 m to your right in a straight line without turning or changing height. Recording 1 is before the move; Recording 2 is after. In Recording 1, the source is 0.55 m from you at ear level. The source may have stayed still or moved between Recording 1 and Recording 2. Answer all questions in order.\n1. Where do you hear the sound in each recording, and how does the distance between you and the source compare?\n2. If the source stayed still, where would you hear it in Recording 2, and would it be closer, farther away, or at the same distance?\n3. Does that prediction match what you actually hear in Recording 2?\n4. State whether your move alone is enough, or whether source movement is also needed.",
      "instruction": "Answer all numbered questions in their presented order using short English sentences. No fixed sentence count is required.",
      "options": [],
      "promptSha256": "7f34c4e89fb070ecfd16c7a97c17c1e9c11cc483a697f4f5aa89396504b246aa",
      "directForA": true,
      "clips": [
        {
          "file": "clips/1950952b65fa04b1.wav",
          "sha256": "249b8e53e9a5309cf979227f8db6eac9015d2e70e1a126acb4c1e577307106de",
          "view": "direct_binaural"
        },
        {
          "file": "clips/8750525616e53581.wav",
          "sha256": "c897f466c76c503d8aa66663de77497c684a487240c7468a1425ca1a59e797b8",
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
      "id": "q_01cd2b34c8a1fdd1a09db4e3",
      "subtype": "joint_rotation_source_direction",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Each recording contains a single clearly audible sound source at ear level, at the same distance from you in both recordings.",
      "question": "Recording 1 was made before the movements and Recording 2 after them. In between, you turned your head 90 degrees to your left without changing position. The source also moved horizontally around you during the turn, in one direction by at most 90 degrees, without reversing. Did the source move around you in the same direction as your head turn or in the opposite direction?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "In the same direction as your head turn"
        },
        {
          "letter": "B",
          "text": "In the opposite direction to your head turn"
        }
      ],
      "promptSha256": "c464830ab64129dbe5b43d48cee2482c9bdfd52b009120a4ec7b28b93071a217",
      "directForA": true,
      "clips": [
        {
          "file": "clips/7deb11355eb3fce1.wav",
          "sha256": "73e986042ce965e7f2f7e00c4c0d8c807c2e86329e57d1877044884ab019c20d",
          "view": "direct_binaural"
        },
        {
          "file": "clips/0ccc49def3242743.wav",
          "sha256": "65b93270bbc5c2132fdec8c063d0f31a698fd9d51332e2fec565b02ca5fba87b",
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
      "id": "q_d0bf7444c621794164ec1110",
      "subtype": "translation_compatibility",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations. Loudness depends only on the distance between you and the sound source.",
      "question": "You moved 5.4 m backward in a straight line without turning or changing height. Recording 1 is before the move; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your movement alone explain the sound directions and distances in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "2b159f05af6b978e9e00b0fef1dafb3a9f081527f374036488c7e0ca0fd54582",
      "directForA": true,
      "clips": [
        {
          "file": "clips/b183722a0d004a2d.wav",
          "sha256": "304baf264f2b6a7196e6a2c205a0b665ecefcbb1c6ac7e5e1c80b6bf758cc4bd",
          "view": "direct_binaural"
        },
        {
          "file": "clips/ed2c5d4c8fe43450.wav",
          "sha256": "c837a43096180692f634971eafb9e54314b1c789f3ec842e5acc54e5726445fb",
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
      "id": "q_fb8c7d8cb9cebf1c9a407101",
      "subtype": "infer_movement_order",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\n\nThis is one continuous recording. Initially, the source is 0.52 m directly in front of you at ear level.",
      "question": "The source stayed in one place. You kept facing the same direction and stayed at the same height. You made two straight moves on the horizontal plane. Each move was forward, backward, left, or right. Which order of the two movements matches the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Move right, then left."
        },
        {
          "letter": "B",
          "text": "Move left, then right."
        }
      ],
      "promptSha256": "26a2d49ea7d4f190a0dd9307e62c8b63bd7cdf513837c1e52c64e48fc0f4ae96",
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
      "id": "q_a75b80d7023183098b416a24",
      "subtype": "source_direction_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording. Consider the direction above or below you.",
      "question": "Your position and facing direction stay fixed. How does the sound source's direction change during the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "remains unchanged"
        },
        {
          "letter": "B",
          "text": "from above to below"
        },
        {
          "letter": "C",
          "text": "from below to above"
        }
      ],
      "promptSha256": "fbd09dd8aad6dd4e53bd29299830d222250447968452856b012dc7e6e809714f",
      "directForA": false,
      "clips": [
        {
          "file": "clips/01d721c547df0ad3.wav",
          "sha256": "5c3b9783bf3992c86076eaa2f0ffad93c55b6110f7d7bbae9d269229af8ade02",
          "view": "direct_binaural"
        },
        {
          "file": "clips/5639c96aa7486f20.wav",
          "sha256": "80064e36cfe80580fc3011b35d3339a10246766381790f531958725bd28b167c",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_2905ef80925d2e7c88f2aa23",
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
      "directForA": false,
      "clips": [
        {
          "file": "clips/9cd0abd563177f80.wav",
          "sha256": "63afe31bba374aeafb2c9b3256db094134b424203428fd5d3078eefb22e3bf60",
          "view": "direct_binaural"
        },
        {
          "file": "clips/b96efc39f8a4848d.wav",
          "sha256": "a175656fabd41b540906b97699f9c070b38eec8e7226e576fc48837a7fa6b6d9",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_f5ddeb144a46e5da523eaf97",
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
      "directForA": true,
      "clips": [
        {
          "file": "clips/b50168bdef957ee2.wav",
          "sha256": "fa842853983d8a22a3aa35c4886a11adf49043d28069ba5624a070c8734fb2a3",
          "view": "direct_binaural"
        },
        {
          "file": "clips/87692ffb8da3b93a.wav",
          "sha256": "ff43fca38064fb6fca352db127db5e6368949f66b9fc2ffe3f4459ecc573869f",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_895ebfe6eb72456d561643fc",
      "subtype": "infer_head_turn",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "The source stayed fixed. You turned your head 90 degrees between Recording 1 and Recording 2 without changing your position. Did you turn left or right?",
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
      "promptSha256": "12e0d2048fdf50983eda352912da2e294685153f7225bbe670c5bfd6b638d43d",
      "directForA": false,
      "clips": [
        {
          "file": "clips/bbc9970c6690cfdc.wav",
          "sha256": "80b91084c72c1ba8dd5e6191f469b02e990f74ff5542755bc0f52db52103eea9",
          "view": "direct_binaural"
        },
        {
          "file": "clips/75b531dd8f7a155c.wav",
          "sha256": "92bf0b8418ad6dd407e69162330623639313814b82f32ebc26c6590f92722ec6",
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
      "id": "q_8038289c2260ef9d1de343eb",
      "subtype": "joint_rotation_source_direction",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Each recording contains a single clearly audible sound source at ear level, at the same distance from you in both recordings.",
      "question": "Recording 1 was made before the movements and Recording 2 after them. In between, you turned your head 90 degrees to your left without changing position. The source also moved horizontally around you during the turn, in one direction by at most 90 degrees, without reversing. Did the source move around you in the same direction as your head turn or in the opposite direction?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "In the opposite direction to your head turn"
        },
        {
          "letter": "B",
          "text": "In the same direction as your head turn"
        }
      ],
      "promptSha256": "e4bd25f0347194afb91298f08cbe5cc389827305cb1e8bec4afcdf40559c31f1",
      "directForA": false,
      "clips": [
        {
          "file": "clips/bda07f5300e5adde.wav",
          "sha256": "1a71dda343f4d40423c66ad103b580f2dbdbb143ffecaec8e00f7d3466b1298e",
          "view": "direct_binaural"
        },
        {
          "file": "clips/d929d5ec63ede18e.wav",
          "sha256": "561a127a85eb825453a010b217126bfca5bee0c7c5852a38410317c3e5c7f32f",
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
      "id": "q_91e18628541d06e57478918c",
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
      "id": "q_29bb58ea1acb0adc28aa5f18",
      "subtype": "match_after_head_turn",
      "format": "single_choice",
      "setup": "",
      "question": "The source stayed in one place. Reference was recorded before you turned. You turned your head 90 degrees to the right without changing position. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear after the turn?",
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
      "promptSha256": "4105405c8f40715abc1b61309a6399ae25483fd6af95bee7b24eb69c98d1b0d3",
      "directForA": false,
      "clips": [
        {
          "file": "clips/0156138dc0a3a8d9.wav",
          "sha256": "2a6dd60fe383678c4a31c67f9e059b1bc4669a4ad031c6aed4726e37e8c5790e",
          "view": "direct_binaural"
        },
        {
          "file": "clips/222d9cbad9e75bc1.wav",
          "sha256": "defe81e3dd8021d9e646d9a4842404c5d2fd983d217c60787c8b3e8e7ade2063",
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
      "directForA": false,
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
      "id": "q_bce05ff47f19d92c712953e6",
      "subtype": "static_relative_elevation",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Each recording contains a single clearly audible sound source. The sound source remains stationary throughout each recording. You keep the same position and facing direction throughout both recordings. Both recordings use the same sound. Each recording is a separate static observation. The source is the same distance from you in both recordings.",
      "question": "Compare the sound direction in Recording 1 and Recording 2. Does the sound come from higher up in Recording 1, higher up in Recording 2, or about the same height?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Higher in Recording 2"
        },
        {
          "letter": "B",
          "text": "About the same height"
        },
        {
          "letter": "C",
          "text": "Higher in Recording 1"
        }
      ],
      "promptSha256": "e7c2464aaf5bf8d8134f0f8ed02b8074a651e4dcb8e0dc2c3d955956bfe6e0e4",
      "directForA": true,
      "clips": [
        {
          "file": "clips/e74eafc3e274f3cb.wav",
          "sha256": "5a3521e8f8acee6c9cdde5d2eea2dbe0454a427040e18d8f4ef472918f96fe10",
          "view": "direct_binaural"
        },
        {
          "file": "clips/752af9c82042bfac.wav",
          "sha256": "72a19952c86fdbd6104d59f88255497af20b420eb196af9216737e52823d25b3",
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
      "directForA": true,
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
      "id": "q_f2c4ad022b36c247ee2160b9",
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
      "directForA": true,
      "clips": [
        {
          "file": "clips/c1a9df6cdbb88c59.wav",
          "sha256": "f096ac1a64c656b4487cb1dbe81fcd7b2d4e7e031c36b2550d49fc371000bbbe",
          "view": "direct_binaural"
        },
        {
          "file": "clips/edea2808d972ece9.wav",
          "sha256": "6feda6f72f83ea613353cf4eaa6ebd6b07fa5ba4f6f94913d9ba0e874763c154",
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
      "id": "q_ecdf70e57c5008bf83ecc6cf",
      "subtype": "translation_compatibility",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You moved 1.27 m to your right in a straight line while keeping the same facing and ear height. Recording 1 is before the move. Recording 2 is after. The source may have stayed still or moved between recordings. If the source stayed still, it would sound noticeably farther away in Recording 2. Does the distance change you hear match that prediction?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "72111410955de89fd0e18f2de66bcee7acea75d6c7c3fe96cfd2a3356f70051d",
      "directForA": true,
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
      "directForA": false,
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
      "id": "q_9b70b1d7041e0de9d8d029ae",
      "subtype": "compensate_head_turn",
      "format": "open",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "You turned your head 90 degrees to your right without changing position. Recording 1 is before the turn; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Answer all questions in order.\n1. Where do you hear the sound in each recording?\n2. If the source stayed still, where would you hear it in Recording 2?\n3. Does that prediction match what you actually hear in Recording 2?\n4. State whether your head turn alone is enough, or whether source movement is also needed.",
      "instruction": "Answer all numbered questions in their presented order using short English sentences. No fixed sentence count is required.",
      "options": [],
      "promptSha256": "6f1758d940bcef3975a9f08da0b53abae4baf77b97323fb1c81d67cb3bb483ac",
      "directForA": true,
      "clips": [
        {
          "file": "clips/f5f18861e6d7ac18.wav",
          "sha256": "d88b86492d738a9df5473d82309bf7dfe657e7946b8da107b002aef229c37ab5",
          "view": "direct_binaural"
        },
        {
          "file": "clips/4af7d38f94bc7969.wav",
          "sha256": "aaa626b59a115b9fe6be59f6e51303023c0c6b87a4ce3b17b3ce8974475ee7ab",
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
      "directForA": true,
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
      "id": "q_e226190af3dfd8a2d6a695f4",
      "subtype": "infer_movement_timing",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\nTimes start at 0 seconds in this recording.\n\nThis is one continuous recording. Initially, the source is 0.55 m directly in front of you at ear level.",
      "question": "The source stayed in one place. You stayed in the same position and made two horizontal head turns, each to the left or right. You moved continuously throughout the recording, with no pauses. Which timeline matches the two movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Turn left from 0 to 3.5 s, then turn right from 3.5 to 10 s."
        },
        {
          "letter": "B",
          "text": "Turn left from 0 to 6.5 s, then turn right from 6.5 to 10 s."
        }
      ],
      "promptSha256": "9f049ebaae3cfb8ceae1e565f5fa3ea227cc69c92730f367281681b89fcce806",
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
      "id": "q_913da8658b9a5c5751557cba",
      "subtype": "infer_translation",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "The source stayed fixed. You moved in a straight line at the same height without turning. You did not move diagonally. Recording 1 is before the move; Recording 2 is after. In which direction did you move?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Straight to your left"
        },
        {
          "letter": "B",
          "text": "Straight to your right"
        },
        {
          "letter": "C",
          "text": "Straight backward"
        },
        {
          "letter": "D",
          "text": "Straight forward"
        }
      ],
      "promptSha256": "71c914d04944d1b96a0d758cad625d563496856ffd4d1bc639b8f4e052999271",
      "directForA": false,
      "clips": [
        {
          "file": "clips/ac2c7a61577fe8c6.wav",
          "sha256": "c64048ea178e9e34bcb61bfae8baaa058ec8320d000c9c5153da325c7e4e4f7a",
          "view": "direct_binaural"
        },
        {
          "file": "clips/d5f2585b2effa3c8.wav",
          "sha256": "9d5f546c87237a4ccf3cfd4d68af0030ed638320d0b11d1c0a90b6c7d22b3631",
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
      "id": "q_b181bb70f8bbf0ea41fbeff7",
      "subtype": "match_after_head_turn",
      "format": "single_choice",
      "setup": "",
      "question": "The source stayed in one place. Reference was recorded before you turned. You turned your head 90 degrees to the right without changing position. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear after the turn?",
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
      "promptSha256": "4105405c8f40715abc1b61309a6399ae25483fd6af95bee7b24eb69c98d1b0d3",
      "directForA": true,
      "clips": [
        {
          "file": "clips/f3d3bddf41d3e209.wav",
          "sha256": "63630f59d4929bb085aae57c9acacdbb1b1784ed98b5aae82329c74c97ffa2a2",
          "view": "direct_binaural"
        },
        {
          "file": "clips/ead28db5434707eb.wav",
          "sha256": "7f7a17054774aa55415cc5869c970ecde08fa9d3f1079a44beacec2f27736ec5",
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
      "id": "q_14cd0aa6047eef511604554a",
      "subtype": "translation_compatibility",
      "format": "judgment",
      "setup": "The supplied audio contains two separate static observations. Loudness depends only on the distance between you and the sound source.",
      "question": "You moved 5.4 m backward in a straight line without turning or changing height. Recording 1 is before the move; Recording 2 is after. The source may have stayed still or moved between Recording 1 and Recording 2. Can your movement alone explain the sound directions and distances in Recording 1 and Recording 2?",
      "instruction": "Answer only Yes or No.",
      "options": [],
      "promptSha256": "2b159f05af6b978e9e00b0fef1dafb3a9f081527f374036488c7e0ca0fd54582",
      "directForA": false,
      "clips": [
        {
          "file": "clips/beff820393109c69.wav",
          "sha256": "f5593031835596f15244f04d7c75a7946fa5137638a400fb59a0ba29adb4ad4d",
          "view": "direct_binaural"
        },
        {
          "file": "clips/69945f7de609d6ab.wav",
          "sha256": "c2fc5be58e97de97c7bf9a5a191983f0467b18dedc952bdd8eb73c3cecaf7e29",
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
      "id": "q_e21845a287a910eb5b3ee938",
      "subtype": "static_front_back",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe recording contains a single clearly audible sound source. The sound source remains stationary, and your position and facing direction remain fixed throughout the recording.",
      "question": "Is the sound source in front of you or behind you?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Behind"
        },
        {
          "letter": "B",
          "text": "In front"
        }
      ],
      "promptSha256": "a94d4edb2ff70227d3ff137067434dc91e0770ac82f5730babd83954ddd913f0",
      "directForA": true,
      "clips": [
        {
          "file": "clips/fa8cd5a3277b5c64.wav",
          "sha256": "c85c5a4b4a23f22b7a6c201604faf907f53fda50da5ff3650eae511598da4d5f",
          "view": "direct_binaural"
        },
        {
          "file": "clips/b98d999084d6b57f.wav",
          "sha256": "ae6b3a202e2848b2e2c83d63f63ad54f094d7a92ec858ebd442dc0c6bbb0f4c5",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_32b1fb12c99371448a855502",
      "subtype": "static_front_back",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe recording contains a single clearly audible sound source. The sound source remains stationary, and your position and facing direction remain fixed throughout the recording.",
      "question": "Is the sound source in front of you or behind you?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Behind"
        },
        {
          "letter": "B",
          "text": "In front"
        }
      ],
      "promptSha256": "a94d4edb2ff70227d3ff137067434dc91e0770ac82f5730babd83954ddd913f0",
      "directForA": false,
      "clips": [
        {
          "file": "clips/f4a07b36d26fa11d.wav",
          "sha256": "4adadaccc395f98a15a2e3e2c49d8ba9461db96a339706a0efb9d08a6bfe6289",
          "view": "direct_binaural"
        },
        {
          "file": "clips/99974ee5d388a679.wav",
          "sha256": "decc1d3faa7b8c68c3823acfa67633c38a4f1c4698afbb6f09024eb2598fbe5f",
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
      "id": "q_3a048ef217e5e102bbbb5a9e",
      "subtype": "static_left_right",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe sound source remains stationary throughout the recording.",
      "question": "Is the sound source on your left or on your right?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Left"
        },
        {
          "letter": "B",
          "text": "Right"
        }
      ],
      "promptSha256": "0680ec91df54d22456c24cfd7937528a41ed5e0c3b30a4c9daa0012ba36757ea",
      "directForA": true,
      "clips": [
        {
          "file": "clips/34429cc4bda68527.wav",
          "sha256": "e1726e34eb6c1e364c9a72a7f735ea427fa5b0e81ec3f30184ea0ab1cdf69390",
          "view": "direct_binaural"
        },
        {
          "file": "clips/0dfa5cb7598e05d8.wav",
          "sha256": "462fe536773af22607e9f40f3b4f5e76232081b869c50e7d89a6e6f17a62fc61",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_1557b4aea96803aad4fbed70",
      "subtype": "describe_spatial_changes_over_time",
      "format": "open",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\nTimes start at 0 seconds in this recording. This is one continuous recording.\n\nThe source stayed fixed. Initially, the source is 0.55 m directly in front of you at ear level. You made one in-place horizontal head turn and one straight horizontal movement while facing the same way during that movement.",
      "question": "Describe how the sound direction changes during each stage. Give approximate start and end times for both stages.",
      "instruction": "Answer both stages in order.",
      "options": [],
      "promptSha256": "543b0760c2e3a0f92afe24e19f8d68cf0989743076f6671587c2ac5ead04ffde",
      "directForA": false,
      "clips": [
        {
          "file": "clips/e3559e8046d72afe.wav",
          "sha256": "9f2342bec54b65f14fa043b597e785443af5eb8cbd60a8cead482a595f5a57ad",
          "view": "direct_binaural"
        },
        {
          "file": "clips/91fe4afc1090a010.wav",
          "sha256": "7f6950fbbfd18b7b42f78e07205dccf78876b15b80d0f632cf2a0ebfe2fe3cd8",
          "view": "reverberant_binaural"
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
      "directForA": true,
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
      "id": "q_5eb2a0d11eb85d3a5ff66db5",
      "subtype": "static_front_back",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThe recording contains a single clearly audible sound source. The sound source remains stationary, and your position and facing direction remain fixed throughout the recording.",
      "question": "Is the sound source in front of you or behind you?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "In front"
        },
        {
          "letter": "B",
          "text": "Behind"
        }
      ],
      "promptSha256": "93ef0b5f32adfcc56f971ae49bc32a56b225ea3c6f27d194d9eecda518b96700",
      "directForA": false,
      "clips": [
        {
          "file": "clips/72db06eb7f46230b.wav",
          "sha256": "0bdd818011cacd35bc2f885c6cac4ceff59cf7c083060e65a74d9d8dd743ce64",
          "view": "direct_binaural"
        },
        {
          "file": "clips/e372c7af922dd915.wav",
          "sha256": "52f84e20c49ada535005c74accc0499f8150b23baf5086a02b57b9b0192480f9",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_1ec68ce74e45cf617db48f79",
      "subtype": "source_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 4 seconds in the supplied audio.\n\nThis is one continuous recording. Loudness depends only on the distance between you and the sound source.",
      "question": "Your position and facing direction stay fixed. Compared with the beginning, is the source closer, farther away, or at approximately the same distance at the end?",
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
      "promptSha256": "4f4dad75ea6db4edfd2cbee02d79f7bab9ce915cd50601e220809c80b2c6d237",
      "directForA": true,
      "clips": [
        {
          "file": "clips/c69021be766594ab.wav",
          "sha256": "b76c715adc1d79f9ee07609ef625f523a145e9f8444c13b3b12a7bb0705df1e8",
          "view": "direct_binaural"
        },
        {
          "file": "clips/4bb7a04030292768.wav",
          "sha256": "670f6614393937a24a2bb16422bf95f24969baf006accbbce1ee393c5aebb7ce",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_0179192d255bec56babaee71",
      "subtype": "match_after_translation",
      "format": "single_choice",
      "setup": "",
      "question": "The source stayed in one place. Reference was recorded before you moved. You moved 0.55 m diagonally forward and to your right without turning or changing height. Which candidate recording, Candidate 1 or Candidate 2, could have been made after the move?",
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
      "promptSha256": "6fb4b533d109e2d4be7562b26ad91a319cdfcf82b792bc4fba436a9003968ce1",
      "directForA": true,
      "clips": [
        {
          "file": "clips/07d76759b215224c.wav",
          "sha256": "acbf7a6e99571bcfc7e938abbfe60af11ba521baf2e50fa891af2b016827781a",
          "view": "direct_binaural"
        },
        {
          "file": "clips/455c7d08641a91c0.wav",
          "sha256": "209761e054b1cafb0c9680f302d39e095e288817eccf8fe248d237c3e0a5d8d0",
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
      "id": "q_9a3fb691e419ee2c307572dc",
      "subtype": "match_timed_movement_audio",
      "format": "single_choice",
      "setup": "Each recording has its own timeline, starting at 0 seconds.\n\nEach candidate is one continuous recording. Initially, the source was 0.55 m directly in front of you at ear level. From 0 to 2.5 seconds, move 0.55 m toward the right of your initial facing direction while keeping your current heading. From 2.5 to 5 seconds, turn your head 45 degrees to your left without changing position.",
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
      "promptSha256": "ebaf736ca8f7c747de796918a2e56bf7e7302ca6fdb320ee4c5e2c6e66075d2c",
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
      "id": "q_6a437f7ed65604780a3a631a",
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
          "file": "clips/2361d050385d3a23.wav",
          "sha256": "da893b94ba5e50bddf63fc4a9da2c8784a022d8af1756934be4172b972a7a8e5",
          "view": "direct_binaural"
        },
        {
          "file": "clips/705c2c6abb89f0aa.wav",
          "sha256": "e2177fe2639bd5fd36cad8bdcc03ee641240e87b33b85bfd789b29e97f8be14e",
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
      "id": "q_d3414f8046d4fd4339a8af09",
      "subtype": "static_relative_elevation",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Each recording contains a single clearly audible sound source. The sound source remains stationary throughout each recording. You keep the same position and facing direction throughout both recordings. Both recordings use the same sound. Each recording is a separate static observation. The source is the same distance from you in both recordings.",
      "question": "Compare the sound direction in Recording 1 and Recording 2. Does the sound come from higher up in Recording 1, higher up in Recording 2, or about the same height?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Higher in Recording 1"
        },
        {
          "letter": "B",
          "text": "Higher in Recording 2"
        },
        {
          "letter": "C",
          "text": "About the same height"
        }
      ],
      "promptSha256": "97cfce3ffe65ee76b3819f540971ed21fa091a2aa97c8e08bfbec432311bec5a",
      "directForA": false,
      "clips": [
        {
          "file": "clips/3032db8a3d5a9e05.wav",
          "sha256": "7f002fa1a7761ce693fefc0e59a4a1d60d4136cd69c4662f517fbde589b14eee",
          "view": "direct_binaural"
        },
        {
          "file": "clips/808dbbed79b41e6c.wav",
          "sha256": "c87e907e3f10baabd88b8fd1363d63ed0b88278e9f5a3d313c86c19b179a5997",
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
      "directForA": true,
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
      "id": "q_265b4d5a3b9147a73de5bcb2",
      "subtype": "infer_head_turn",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "The source stayed fixed. You turned your head 90 degrees between Recording 1 and Recording 2 without changing your position. Did you turn left or right?",
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
      "promptSha256": "12e0d2048fdf50983eda352912da2e294685153f7225bbe670c5bfd6b638d43d",
      "directForA": true,
      "clips": [
        {
          "file": "clips/c23ef7d4d9fe21cb.wav",
          "sha256": "9ed35507e8a93ef5a5be176697e212512bef4ec53f93ee7da909656f0c29dfcf",
          "view": "direct_binaural"
        },
        {
          "file": "clips/1bf42b285c4cceb0.wav",
          "sha256": "af9e332d4f62da59b4b95251109634b6a0bf112646024588bf70ca4f3eb8725e",
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
      "id": "q_11d03eb292ba5dfdfdf0a017",
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
          "file": "clips/efcb91e26b313aca.wav",
          "sha256": "1300b7851a7c9c65ea186aba6dd456c3000cfe7fcf81ea1845e461dc670f7ce2",
          "view": "direct_binaural"
        },
        {
          "file": "clips/dc4180d2713b9f5f.wav",
          "sha256": "0f3a1cf8ee2d65535c3120f217e4148f1b7c016e23401be200e4aef9121c0da8",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_b4940a1857caec8160f97dcd",
      "subtype": "match_after_head_turn",
      "format": "single_choice",
      "setup": "",
      "question": "The source stayed in one place. Reference was recorded before you turned. You turned your head 90 degrees to the left without changing position. Which candidate recording, Candidate 1 or Candidate 2, matches what you would hear after the turn?",
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
      "promptSha256": "ec7de235a57440be42a02310aaae9a91b6ce223ec6992cbc2ee2d9b7e8991b4b",
      "directForA": false,
      "clips": [
        {
          "file": "clips/84ba3a7a964e1401.wav",
          "sha256": "1e17c85007b8dbc19cd7306965f0b3dc1796c67f3706909cb77cffc7f1eb5b0a",
          "view": "direct_binaural"
        },
        {
          "file": "clips/310986cdf58d58db.wav",
          "sha256": "0e82365f482805ae63866753d890ef3b0e58f78531add3f28dc0e4428eda2e95",
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
      "id": "q_37a25bb60a09d17d97614d6d",
      "subtype": "infer_movement_timing",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\nTimes start at 0 seconds in this recording.\n\nThis is one continuous recording. Initially, the source is 0.55 m directly in front of you at ear level.",
      "question": "The source stayed in one place. You kept facing the same direction and stayed at the same height. You made two straight moves on the horizontal plane. Each move was forward, backward, left, or right. You moved continuously throughout the recording, with no pauses. Which timeline matches the two movements?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Move left from 0 to 6.325 s, then move right from 6.325 to 10 s."
        },
        {
          "letter": "B",
          "text": "Move left from 0 to 3.05 s, then move right from 3.05 to 10 s."
        }
      ],
      "promptSha256": "0faaf7f0f2c268aaa1382634eda800080a07902a009e79be3e9de2e9c43f2475",
      "directForA": false,
      "clips": [
        {
          "file": "clips/e2cd02e5b23e700b.wav",
          "sha256": "9ad53c3533e31625223bc0e2ab7e7b8cc2f1d5e707333864386f4bbb9af5b08b",
          "view": "direct_binaural"
        },
        {
          "file": "clips/7a5aed29d1b61e95.wav",
          "sha256": "8db2712959e9c0d36cd05042891a17534db2b9e5ac3215a3d17bb590c76470ba",
          "view": "reverberant_binaural"
        }
      ]
    },
    {
      "id": "q_6a86476c98f817e0342ae8dc",
      "subtype": "infer_head_turn",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations.",
      "question": "The source stayed fixed. You turned your head 90 degrees between Recording 1 and Recording 2 without changing your position. Did you turn left or right?",
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
      "promptSha256": "12e0d2048fdf50983eda352912da2e294685153f7225bbe670c5bfd6b638d43d",
      "directForA": false,
      "clips": [
        {
          "file": "clips/62ad7f0ed8b6df24.wav",
          "sha256": "8b9868864405cf9b0b0d683b04d9d896b4dcd795063b66aec633ef6f9cb941ff",
          "view": "direct_binaural"
        },
        {
          "file": "clips/7f37e10e25eb45ff.wav",
          "sha256": "c68db881038ccb8f4782b11269ec6cf5208b1f9d6cfa803837a6af463666f806",
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
      "directForA": false,
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
      "id": "q_1f0384876a7dd442765f994e",
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
      "directForA": true,
      "clips": [
        {
          "file": "clips/fde36f18c2906dfb.wav",
          "sha256": "39a49fb492a975a2ad2c057b64ad7b3f727041c1fb48d5f424b331194deb4e0b",
          "view": "direct_binaural"
        },
        {
          "file": "clips/9dca137463372a31.wav",
          "sha256": "9ba51f5efacdbe6d28383b88be0b2cc8023840913bd5824e30dc9a089ac2b9b5",
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
      "directForA": false,
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
      "id": "q_b81f34b48639e688c74ecd43",
      "subtype": "translation_range_change",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. You moved 4.7 metres between the recordings. Loudness depends only on the distance between you and the sound source.",
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
      "promptSha256": "08e7619572338d428fc1a7398ad8a7601c3f0f709a5cf36a253f15c1a8dfd5a9",
      "directForA": true,
      "clips": [
        {
          "file": "clips/70fc9d2609d2b34d.wav",
          "sha256": "0887784c6fae8994ec7a90b264dac0c6fd2f2d2d3c1d1ef7d717d074efdc2ccc",
          "view": "direct_binaural"
        },
        {
          "file": "clips/96f978503ba2a2aa.wav",
          "sha256": "62c2499e4092ea089dca21a35aaed6255769abfbc819e02b605fbb3f5e198f7e",
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
      "id": "q_0d65ce8d33ab87f8f5d8707d",
      "subtype": "count_direction_reversals",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 8 seconds in the supplied audio.\n\nThis is one continuous recording.",
      "question": "The source stayed in one place. Initially, it was directly in front of you at ear level. You moved laterally along a straight line without pausing or changing your facing direction. How many times did you reverse the direction of your movement?",
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
      "promptSha256": "18728900c0b93ab80360959142ee394fc8d6a7e4df428f2c4481838a4c088d73",
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
      "id": "q_d968801fab615478c4a76501",
      "subtype": "static_relative_distance",
      "format": "single_choice",
      "setup": "The supplied audio contains two separate static observations. Your position and facing direction are the same in both recordings. The same source stays still during each recording and is heard from the same direction. Loudness depends only on the distance between you and the sound source.",
      "question": "Does the source sound closer in Recording 1, closer in Recording 2, or at about the same distance?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Closer in Recording 1"
        },
        {
          "letter": "B",
          "text": "About the same distance"
        },
        {
          "letter": "C",
          "text": "Closer in Recording 2"
        }
      ],
      "promptSha256": "cd2ae3e9a31f548460d6b5e5c8fa682dda77def0dd59ba0a5e2daa62d59c55e4",
      "directForA": false,
      "clips": [
        {
          "file": "clips/4c61220361c76726.wav",
          "sha256": "4e9ff5cb9fc493c1fcebff5fe5608abb900b63fa850c85096573a785289a82e2",
          "view": "direct_binaural"
        },
        {
          "file": "clips/c7e106bf9afc4d93.wav",
          "sha256": "a51afaf7e402d254684684770912605242ee66f7af9193812d0a74528adec87d",
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
      "id": "q_0fc814a3c9003df4b33929fe",
      "subtype": "infer_movement_order",
      "format": "single_choice",
      "setup": "The supplied audio contains the following recording:\nRecording 1: 0 to 10 seconds in the supplied audio.\n\nThis is one continuous recording. Initially, the source is 0.55 m directly in front of you at ear level.",
      "question": "The source stayed in one place. You kept facing the same direction and stayed at the same height. You made two straight moves on the horizontal plane. Each move was forward, backward, left, or right. Which order of the two movements matches the recording?",
      "instruction": "Return only the letter of the correct option.",
      "options": [
        {
          "letter": "A",
          "text": "Move right, then left."
        },
        {
          "letter": "B",
          "text": "Move left, then right."
        }
      ],
      "promptSha256": "591183da6b334520701b556ae4ccb5d27b948e4cfcf6617451f1e026d571093f",
      "directForA": true,
      "clips": [
        {
          "file": "clips/8b2284a727e8615f.wav",
          "sha256": "062948d70e23d857fc05737db2c83bd4ac26130840ba8645910f9002846b353b",
          "view": "direct_binaural"
        },
        {
          "file": "clips/ec1134f46dddb0a0.wav",
          "sha256": "bcbfc4ef6cd87d4670da0b59967daac80101f51927cf911cd6b04c1899988db8",
          "view": "reverberant_binaural"
        }
      ]
    }
  ]
};
