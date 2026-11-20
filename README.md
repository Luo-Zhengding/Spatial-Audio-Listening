# AudioWorldSim spatial listening study

[Open the headphone listening test](https://luo-zhengding.github.io/Spatial-Audio-Listening/).

Each listener completes two blocks of 60 trials. Use the code assigned by the study organizer and the same browser to resume. You will use stereo headphones and submit via GitHub after the second block. A GitHub account is required to confirm a submission. The account name appears on the public issue.

The browser encrypts your answers and playback records for the organizer before opening GitHub. Select **Create** on the prefilled issue. For unusually long written answers the test offers encrypted text to paste or an encrypted file to attach. Keep the private JSONL backup on your own device.

Each confirmed issue immediately saves one encrypted response in the public GitHub inbox. The organizer retrieves and decrypts submissions into individual JSONL files with `node tools/read_responses.mjs /path/to/organizer.pem /path/to/output`. The website checks the issue to confirm receipt.