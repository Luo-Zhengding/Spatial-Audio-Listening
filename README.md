# AudioWorldSim spatial listening study

[Open the headphone listening test](https://luo-zhengding.github.io/Spatial-Audio-Listening/).

Each listener answers the same 42 questions twice, once with direct sound and once with reverberation. There are two blocks of 42 trials, for 84 responses in total. Each block includes two short written answers. Enter your English name. To resume, use the same name in the same browser. Listen with stereo headphones. Each candidate, reference or separate observation has its own player; continuous recordings play in full. Submit via GitHub after the second block. A GitHub account is required to confirm a submission. The account name appears on the public issue.

The browser encrypts your answers and playback records for the organizer before opening GitHub. Select **Create** on the prefilled issue. For unusually long written answers the test offers encrypted text to paste or an encrypted file to attach. Keep the private JSONL backup on your own device.

Each confirmed issue immediately saves one encrypted response in the public GitHub inbox. The organizer retrieves and decrypts submissions into individual JSONL files with `node tools/read_responses.mjs /path/to/organizer.pem /path/to/output`. The website checks the issue to confirm receipt.