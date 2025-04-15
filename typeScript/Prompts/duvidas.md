###
    No projeto no qual estou trabalhando a estrutura de pasta começa com "app" que seria o banckend, dentro dessa pasta eu estou criando uma pasta exemplo chamada template_service, esse template consiste em criar um micro-serviço atraves do comando "npm run new:microservice abc-service".

    Com a ajuda do GPT nós chegamos no código abaixo;

***_template-microservice.ts;

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const SERVICE_NAME = process.argv[2];
const APP_DIR = path.join(__dirname, "app");
const TEMPLATE_DIR = path.join(__dirname, "template");
const SERVICE_DIR = path.join(APP_DIR, SERVICE_NAME);

if (!SERVICE_NAME) {
  console.error("Por favor, informe o nome do microsserviço.");
  process.exit(1);
}

if (fs.existsSync(SERVICE_DIR)) {
  console.error(`O microsserviço '${SERVICE_NAME}' já existe.`);
  process.exit(1);
}

fs.mkdirSync(SERVICE_DIR, { recursive: true });

const copyRecursive = (src: string, dest: string) => {
  fs.readdirSync(src).forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      fs.mkdirSync(destFile, { recursive: true });
      copyRecursive(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
};

copyRecursive(TEMPLATE_DIR, SERVICE_DIR);

const packageJsonPath = path.join(SERVICE_DIR, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
packageJson.name = SERVICE_NAME;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`✅ Microsserviço '${SERVICE_NAME}' criado com sucesso!`);

execSync(`cd ${SERVICE_DIR} && npm install`, { stdio: "inherit" });

Os arquivos do docker estão dentro da raiz "app" e o serviço automático deve ser criado dentro da raíz "app".
Para isso acontecer eu preciso entender como manipular as pastas dentro das variáveis;
"const APP_DIR = path.join(__dirname, "app");
const TEMPLATE_DIR = path.join(__dirname, "template");
const SERVICE_DIR = path.join(APP_DIR, SERVICE_NAME);" 
Pois o retorno da forma em que esta é a seguinte;
"C:\Dev\ek-sphere\app\template-service\app
C:\Dev\ek-sphere\app\template-service\app\abc-service
C:\Dev\ek-sphere\app\template-service"
Eu preciso que ele crie esse microserviço no seguinte caminho "C:\Dev\ek-sphere\app"

Poderia me ajudar a entender o código e como manipular as variáveis para que eu consiga executar corretamente?
###

###
  Conseguimos fazer funcionar a criação da cópia de pastas pelo código abaixo;

  import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const SERVICE_NAME = process.argv[2]; // Nome do microsserviço passado no CLI
const APP_DIR = path.join(__dirname, "..");
const TEMPLATE_DIR = path.join(__dirname, "example-service");
const SERVICE_DIR = path.join(APP_DIR, SERVICE_NAME);

if (!SERVICE_NAME) {
  console.error("Por favor, informe o nome do microsserviço.");
  process.exit(1);
}

if (fs.existsSync(SERVICE_DIR)) {
  console.error(`O microsserviço '${SERVICE_NAME}' já existe.`);
  process.exit(1);
}

const IGNORE = [
  "node_modules",    
  "_template-microservice.ts"
];

fs.cpSync(TEMPLATE_DIR, SERVICE_DIR, {
  recursive: true,
  filter: (src) => {
    const rel = path.relative(TEMPLATE_DIR, src);

    if (IGNORE.includes(rel)) return false;

    if (IGNORE.some(p => p.endsWith("*.log") && rel.endsWith(".log"))) return false;

    return true;
  }
});

// Copiar a estrutura do template
fs.mkdirSync(SERVICE_DIR, { recursive: true });

const copyRecursive = (src: string, dest: string) => {
  fs.readdirSync(src).forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      fs.mkdirSync(destFile, { recursive: true });
      copyRecursive(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
};

copyRecursive(TEMPLATE_DIR, SERVICE_DIR);

// Atualizar package.json do microsserviço
const packageJsonPath = path.join(SERVICE_DIR, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
packageJson.name = SERVICE_NAME;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`✅ Microsserviço '${SERVICE_NAME}' criado com sucesso!`);

// Instalar dependências
execSync(`cd ${SERVICE_DIR} && npm install`, { stdio: "inherit" });

Agora gostaríamos de que quando criasse o package-json o nome vindo dentro do arquivo seja o mesmo que é passado no "SERVICE_NAME", como podemos adicionar essa função no código acima?
###
