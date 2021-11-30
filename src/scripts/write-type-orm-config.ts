import typeOrmConfigAsync from '../../typeorm.config';
import { ConfigService } from '@nestjs/config';
import fs = require('fs');

try {
  fs.unlinkSync('ormconfig.json');
} catch {}

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(typeOrmConfigAsync.toString(), null, 2),
);

// "pretypeorm": "ts-node -r tsconfig-paths/register src/scripts/write-type-orm-config.ts"
