import { STU3_Extension } from './STU3_Extension'
import { STU3_Narrative } from './STU3_Narrative'
import { STU3_Resource } from './STU3_Resource'

export class STU3_DomainResource      extends STU3_Resource
{

   static def : string = 'DomainResource';
   text : STU3_Narrative ;
   contained : STU3_DomainResource [];
   extension : STU3_Extension [];
   modifierExtension : STU3_Extension [];
}
