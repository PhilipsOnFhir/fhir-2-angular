import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'

export class R4_SubstanceProtein_Subunit      extends R4_BackboneElement
{

   static def : string = 'SubstanceProtein_Subunit';
   subunit : string ;
   sequence : string ;
   length : string ;
   sequenceAttachment : R4_Attachment ;
   nTerminalModificationId : R4_Identifier ;
   nTerminalModification : string ;
   cTerminalModificationId : R4_Identifier ;
   cTerminalModification : string ;
}
