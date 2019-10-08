import { R5_DomainResource } from './R5_DomainResource'
import { R5_Parameters_Parameter } from './R5_Parameters_Parameter'
import { R5_Resource } from './R5_Resource'

export class R5_Parameters      extends R5_Resource
{

   static def : string = 'Parameters';
   parameter : R5_Parameters_Parameter [];
}
