import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'

export class R4_1_SubstanceProtein_Subunit      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceProtein_Subunit';
   subunit : string ;
   sequence : string ;
   length : string ;
   sequenceAttachment : R4_1_Attachment ;
   nTerminalModificationId : R4_1_Identifier ;
   nTerminalModification : string ;
   cTerminalModificationId : R4_1_Identifier ;
   cTerminalModification : string ;
}
