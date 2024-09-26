import { exec } from 'child_process';
import { versionFromGitTag } from 'absolute-version';

const absoluteVersion = versionFromGitTag();

exec(`duplicacy backup -t ${absoluteVersion}`, (err, stdout, stderr) => {
	if (err) {
		console.error(err);
		return;
	}
	if (stderr) {
		console.error(stderr);
		return;
	}
	console.log(stdout);
});
