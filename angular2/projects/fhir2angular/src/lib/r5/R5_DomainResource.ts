import { R5_Extension } from './R5_Extension'
import { R5_Narrative } from './R5_Narrative'
import { R5_Resource } from './R5_Resource'

export class R5_DomainResource      extends R5_Resource
{

   static def : string = 'DomainResource';
   text : R5_Narrative ;
   contained : R5_DomainResource [];
   extension : R5_Extension [];
   modifierExtension : R5_Extension [];
}
