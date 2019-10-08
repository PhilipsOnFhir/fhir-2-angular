import { R4_Extension } from './R4_Extension'
import { R4_Narrative } from './R4_Narrative'
import { R4_Resource } from './R4_Resource'

export class R4_DomainResource      extends R4_Resource
{

   static def : string = 'DomainResource';
   text : R4_Narrative ;
   contained : R4_DomainResource [];
   extension : R4_Extension [];
   modifierExtension : R4_Extension [];
}
