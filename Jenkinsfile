pipeline {
    agent any

    environment {
        SOURCE_BRANCH = "dev"
        DEST_BRANCH = "main"
        REPO_URL = "https://github.com/kishoresuzil1005/jenkins-dev.git"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: "${SOURCE_BRANCH}",
                    url: "${REPO_URL}",
                    credentialsId: 'github-access-token'
            }
        }

	stage('Merge to Destination Branch') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'github-access-token',
            usernameVariable: 'GIT_USERNAME',
            passwordVariable: 'GIT_TOKEN'
        )]) {

            sh '''
            git config user.name "jenkins"
            git config user.email "jenkins@example.com"

            git remote set-url origin https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/kishoresuzil1005/jenkins-dev.git

            git fetch origin

            # ✅ create main if not exists
            git show-ref --verify --quiet refs/heads/main || git checkout -b main

            # ✅ push main if not exists remotely
            git push origin main || true

            # ✅ pull latest
            git pull origin main --rebase || true

            # ✅ FIX: allow first-time merge
            git merge origin/dev --allow-unrelated-histories -m "merge dev to main"

            git push origin main
            '''
        }
    }
}

    post {
        success {
            echo "✅ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}
echo "updated"
