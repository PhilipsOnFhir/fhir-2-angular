import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Parameters_Parameter } from './STU3_Parameters_Parameter'
import { STU3_Resource } from './STU3_Resource'

export class STU3_Parameters      extends STU3_Resource
{

   static def : string = 'Parameters';
   parameter : STU3_Parameters_Parameter [];
}
