import { DSTU2_Extension } from './DSTU2_Extension'
import { DSTU2_Narrative } from './DSTU2_Narrative'
import { DSTU2_Resource } from './DSTU2_Resource'

export class DSTU2_DomainResource      extends DSTU2_Resource
{

   static def : string = 'DomainResource';
   text : DSTU2_Narrative ;
   contained : DSTU2_DomainResource [];
   extension : DSTU2_Extension [];
   modifierExtension : DSTU2_Extension [];
}
