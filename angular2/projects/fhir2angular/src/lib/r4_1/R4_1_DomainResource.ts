import { R4_1_Extension } from './R4_1_Extension'
import { R4_1_Narrative } from './R4_1_Narrative'
import { R4_1_Resource } from './R4_1_Resource'

export class R4_1_DomainResource      extends R4_1_Resource
{

   static def : string = 'DomainResource';
   text : R4_1_Narrative ;
   contained : R4_1_DomainResource [];
   extension : R4_1_Extension [];
   modifierExtension : R4_1_Extension [];
}
