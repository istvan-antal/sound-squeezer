#!/bin/bash
set -eou pipefail
cd "$( dirname "${BASH_SOURCE[0]}" )/.."

printf '#!/bin/bash\nset -e\nnpm test\n' > .git/hooks/pre-push
chmod +x .git/hooks/pre-push

cp .git/hooks/pre-push .git/hooks/pre-commit

printf '#!/bin/bash\nset -e\nnpm install\nnpm test\n' > .git/hooks/post-merge
chmod +x .git/hooks/post-merge

cp .git/hooks/post-merge .git/hooks/post-rewrite